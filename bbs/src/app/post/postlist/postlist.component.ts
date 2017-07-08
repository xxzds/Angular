import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostListService} from "./postlist.service";
import {Post} from "../model/post-model";

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

  constructor(
    private router:Router,
    private activeRoute: ActivatedRoute,
    private postListService:PostListService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      // 这里可以从路由里面获取URL参数
      console.log(params);
    })
  }

  public searchChanged($event):void{

  }

  public gotoWrite():void{

  }


}
