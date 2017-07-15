import {UserLoginComponent} from "./user/user-login/user-login.component";
import {Routes} from "@angular/router";
import {UserRegisterComponent} from "./user/user-register/user-register.component";
import {ForgetPwdComponent} from "./user/forget-pwd/forget-pwd.component";
export const appRoutes:Routes=[
  {
    path:'',
    redirectTo:'posts',
    pathMatch:'full'
  },
  {
    path:'posts',
    loadChildren:'./home/home.module#HomeModule'
  },
  {
    path:'post',
    loadChildren:'./post/post.module#PostModule'
  },
  {
    path:'login',
    component:UserLoginComponent
  },
  {
    path:'register',
    component:UserRegisterComponent
  },
  {
    path:'forgetpwd',
    component:ForgetPwdComponent
  },
  {
    path:'user',
    loadChildren:'./user/user.module#UserModule'
  }




];
