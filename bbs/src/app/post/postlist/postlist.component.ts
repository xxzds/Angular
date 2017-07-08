import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostListService} from "./postlist.service";
import {Post} from "../model/post-model";
import {Subject} from "rxjs/Subject";
/*import "rxjs/Rx";*/    /* 导入的包太多*/
import "rxjs/add/operator/distinctUntilChanged";

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  //搜索内容
  public searchText:string;
  //展示的内容
  public postList:Array<Post>;

  //总个数
  public totalItems:number;

  //当前页
  public currentPage:number = 1;

  //页面大小
  public itemsPerPage:number=5;

  public maxSize:number = 5;

  public searchTextStream:Subject<string> = new Subject<string>();



  constructor(
    private router:Router,
    private activeRoute: ActivatedRoute,
    private postListService:PostListService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      // 这里可以从路由里面获取URL参数
      console.log("路由参数："+params+":"+JSON.stringify(params));

      console.log("分页插件中传入的当前页"+this.currentPage);

      //加载数据
      this.loadData(this.searchText,this.currentPage);
    });

    this.searchTextStream
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(
        searchText =>{
          console.log("搜索内容:"+this.searchText);
          this.loadData(this.searchText,this.currentPage);
        }
      )
  }


  public loadData(searchText:string,page:number){
    let offset = (this.currentPage-1)*this.itemsPerPage;
    let end = (this.currentPage)*this.itemsPerPage;

    return this.postListService.getPostList(searchText,page)
      .subscribe(
        res =>{
        this.totalItems = res["total"];
        //TODO.正式环境中，需要去掉slice
        this.postList = res["items"].slice(offset,end>this.totalItems?this.totalItems:end);
      },
      error => {
          console.log(error);
      })
  }

  /**
   * 搜索
   * @param $event
   */
  public searchChanged($event):void{
    this.searchTextStream.next(this.searchText);
  }

  /**
   * 发布文章
   */
  public gotoWrite():void{
    
  }

  /**
   * 分页跳转
   * @param event
   */
  public pageChanged(event):void{
    console.log('pageChanged:'+JSON.stringify(event));
    console.log('pageChanged:'+event);
    this.router.navigateByUrl("posts/page/"+event.page);
  }


}
