import {Component} from "@angular/core";
import {Http,Response,Jsonp, URLSearchParams,RequestOptions,Headers} from "@angular/http";
import {Item} from "./Item.model";

@Component({
   selector:'simple-http',
   template:`     
     <h2>Basic Request</h2>
     <input name="searchName" #searchName/>
     <button type="button" (click)="makeRequest(searchName)" >Make Request</button>
     <div *ngIf="loading">loading...</div>
     <pre>{{data | json}}</pre>
     
     <item *ngFor="let item of items" [item]="item">
     </item>
   `
})


export  class SimpleHTTPComponent {
   data : Object;
   loading : boolean;
   items:Item[];

  constructor(private http:Http){

   }

    /*constructor(private jsonp:Jsonp) {
    }*/

   makeRequest(searchName:HTMLInputElement):void {
     this.loading = true;



     //get
   /*   let params = new URLSearchParams();
     params.set('searchName', searchName.value);
     let options = new RequestOptions({search: params });
     this.http.request( 'http://www.tooklili.com:81/tookApp/tbk/getItem',options)
       .subscribe( (res: Response) => {
         this.loading = false;
         this.data = res.json();
         //清除数据
         this.items=[];
         var jsonArray =this.data["tbk_item_get_response"]["results"]["n_tbk_item"];
         if(jsonArray!=null && jsonArray.length>0){
           for(var i=0;i<jsonArray.length;i++){
             var item:Item=new Item(jsonArray[i]);
             console.log(item);
             this.items.push(item);
           }
         }

       }, (error) => {
         console.log( error );
       } );*/

     //post
     let params ='searchName='+searchName.value;
     var headers = new Headers();
     headers.append('Content-Type', 'application/x-www-form-urlencoded');
     this.http.post( 'http://www.tooklili.com:81/tookApp/tbk/getItem',params,{headers: headers})
       .subscribe( (res: Response) => {
         this.loading = false;
         this.data = res.json();
         //清除数据
         this.items=[];
         var jsonArray =this.data["tbk_item_get_response"]["results"]["n_tbk_item"];
         if(jsonArray!=null && jsonArray.length>0){
           for(var i=0;i<jsonArray.length;i++){
             var item:Item=new Item(jsonArray[i]);
             console.log(item);
             this.items.push(item);
           }
         }
       }, (error) => {
         console.log( error );
       } );


   /*  this.jsonp.request( 'http://localhost:9999/tookApp/tbk/getItem?callback=JSONP_CALLBACK')
       .subscribe( (res) => {
         console.log( res.json() );
         this.data = res.json();
         this.loading = false;
       }, (error) => {
         console.log( error );
         this.loading = false;
       } );*/
   }
}
