import { NgModule } from '@angular/core';
import { PostlistComponent } from './postlist/postlist.component';
import {RouterModule} from "@angular/router";
import {postRoutes} from "./post.routes";
import {PostListService} from "./postlist/postlist.service";
import {SharedModule} from "../shared/shared.module";
import {PaginationModule} from "ng2-bootstrap";
import {BooleanPipe} from "../utils/boolean-pipe";

@NgModule({
  imports: [
    SharedModule,
    PaginationModule.forRoot(),
    RouterModule.forChild(postRoutes)
  ],
  declarations: [
    PostlistComponent,
    BooleanPipe
  ],
  providers:[
    PostListService
  ]
})
export class PostModule {
  constructor(){
    console.log('PostModel constructor');
  }
}
