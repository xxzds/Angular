import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SimpleHTTPComponent} from "./simple/SimpleHTTPComponent";
import {HttpModule,JsonpModule} from "@angular/http";
import {ItemComponent} from "./simple/ItemComponent";
import { AppComponent } from './app.component';
import {
  SearchBox, SearchResultComponent, TaobaoSearchComponent,
  tbkServiceInjectables
} from "./taobaoSearch/TaobaoSearchComponent";



@NgModule({
  declarations: [
    SimpleHTTPComponent,
    ItemComponent,
    AppComponent,
    TaobaoSearchComponent,
    SearchBox,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    tbkServiceInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
