import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {RouterModule} from "@angular/router";
import {homeRoutes} from "./home.routes";
import { OnlineContactComponent } from './online-contact/online-contact.component';
import { SocialChannelComponent } from './social-channel/social-channel.component';

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [HomeComponent, OnlineContactComponent, SocialChannelComponent]
})
export class HomeModule {
  constructor(){
    console.log('HomeModule constructor');
  }

}
