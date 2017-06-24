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

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide:LocationStrategy,useClass:HashLocationStrategy},
    UserLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
