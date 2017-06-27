import {Component, ElementRef, EventEmitter, Inject, Injectable, OnInit} from "@angular/core";
import {Item} from "../simple/Item.model";
import {Http,Response} from "@angular/http";
import { Observable } from 'rxjs';

export let TBK_API_URL ='http://www.tooklili.com:81/tookApp/tbk/getItem';

@Injectable()
export class TbkService{
    constructor(
      private http:Http,
      @Inject(TBK_API_URL) private apiUrl:String
    ){}

    search(query:String):Observable<Item[]>{
        console.log('输入参数：'+query);
        return this.http.get(`${this.apiUrl}?searchName=${query}`)
          .map((response:Response) => {
              console.log(response.json());


            var results = (<any>response.json()).tbk_item_get_response.results;
            var total = (<any>response.json()).tbk_item_get_response.total_results;
            console.log("total length:"+total);
            if(total==0){
              return [new Item()];   //返回数组
            }

            return results.n_tbk_item.map(item =>{
              return new Item(item);
            });
          });
    }
}

export var tbkServiceInjectables: Array<any> = [
  {provide: TbkService, useClass: TbkService},
  {provide: TBK_API_URL, useValue: TBK_API_URL}
];


@Component({
  selector:'search-box',
  outputs: ['loading', 'results'],
  template:`
    <input type="text" class="form-control" placeholder="关键字" autofocus>
  `
})
export  class  SearchBox implements OnInit{
    loading:EventEmitter<boolean> = new EventEmitter<boolean>();
    results:EventEmitter<Item[]> = new EventEmitter<Item[]>();

  constructor(
    private tbkService:TbkService,
    private el:ElementRef
  ){}

  ngOnInit():void{
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value) // extract the value of the input
      .filter((text: string) => text.length > 1) // filter out if empty
      .debounceTime(250)                         // only once every 250ms
      .do(() => this.loading.next(true))         // enable loading
      // search, discarding old events if new input comes in
      .map((query: string) => this.tbkService.search(query))
      .switch()
      // act on the return of the search
      .subscribe(
        (results: Item[]) => { // on sucesss
          this.loading.next(false);
          this.results.next(results);
        },
        (err: any) => { // on error
          console.log(err);
          this.loading.next(false);
        },
        () => { // on completion
          this.loading.next(false);
        }
      );
  }
}


@Component({
  selector:'search-result',
  inputs:['item'],
  template:`
    <div class="col-sm-6 col-md-3">
      <a href="{{item.item_url}}">
      <div class="thumbnail">
        <img src="{{item.pict_url}}">
        <div class="caption">
          <h3>{{item.title}}</h3>
        </div>
      </div>
      </a>
    </div>
  `
})
export class SearchResultComponent {
    item:Item;


}


@Component({
    selector:'taobao-search',
    template:`
      <div class='container'>
        <div class="page-header">
          <h1>淘宝商品搜索
            <img
              style="float: right;"
              *ngIf="loading"
              src='assets/images/loading.gif' />
          </h1>
        </div>

        <div class="row">
          <div class="input-group input-group-lg col-md-12">
            <search-box
              (loading)="loading = $event"
              (results)="updateResults($event)"
            ></search-box>
          </div>
        </div>

        <div class="row">
          <search-result
            *ngFor="let item of items"
            [item]="item">
          </search-result>
        </div>
      </div>
    `
})

export class  TaobaoSearchComponent{
  items:Item[];

  updateResults(items:Item[]){
        this.items = items;
  }
}
