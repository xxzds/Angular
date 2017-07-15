import {NgModule} from "@angular/core";
import { UserMainComponent } from './user-main/user-main.component';
import { WritePostComponent } from '../post/write-post/write-post.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {userRoutes} from "./user.routes";
import { UserInfoComponent } from './user-info/user-info.component';
@NgModule({
  declarations: [
    UserMainComponent,
    WritePostComponent,
    UserInfoComponent
  ],
  imports:[
    CommonModule,
    RouterModule.forChild(userRoutes)
  ]
})
export  class UserModule{
  constructor(){
    console.log("UserModule constructor!");
  }
}
