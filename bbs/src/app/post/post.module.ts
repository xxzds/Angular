import { NgModule } from '@angular/core';
import { PostlistComponent } from './postlist/postlist.component';
import {RouterModule} from "@angular/router";
import {postRoutes} from "./post.routes";
import {PostListService} from "./postlist/postlist.service";
import {SharedModel} from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModel,
    RouterModule.forChild(postRoutes)
  ],
  declarations: [PostlistComponent],
  providers:[
    PostListService
  ]
})
export class PostModule {
  constructor(){
    console.log('PostModel constructor');
  }
}
