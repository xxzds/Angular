import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SimpleHTTPComponent} from "./components/SimpleHTTPComponent";
import {HttpModule,JsonpModule} from "@angular/http";
import {ItemComponent} from "./components/ItemComponent";



@NgModule({
  declarations: [
    SimpleHTTPComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [SimpleHTTPComponent]
})
export class AppModule { }
