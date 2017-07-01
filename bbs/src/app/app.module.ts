import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import { UserLoginComponent } from './user/user-login/user-login.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserLoginService} from "./user/user-login/user-login.service";
import {HttpModule} from "@angular/http";
import {ToastModule} from "ng2-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UserRegisterComponent } from './user/user-register/user-register.component';
import {UserRegisterService} from "./user/user-register/user-register.service";
import {EqualValidator} from "./user/user-register/directives/equal-validator.directive";
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import {ForgetPwdService} from "./user/forget-pwd/forget-pwd.service";

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    EqualValidator,   //自定义指令
    ForgetPwdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide:LocationStrategy,useClass:HashLocationStrategy},
    UserLoginService,
    UserRegisterService,
    ForgetPwdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
