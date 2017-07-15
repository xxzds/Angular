import {Routes} from "@angular/router";
import {UserMainComponent} from "./user-main/user-main.component";
import {WritePostComponent} from "../post/write-post/write-post.component";
export const userRoutes:Routes=[
  {
    path:'',
    component:UserMainComponent,
    children:[
      {path:'write',component:WritePostComponent}
    ]
  }
]
