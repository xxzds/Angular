import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DemoFormSku} from "./forms/demo_form_sku";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DemoFormSkuBuilder} from "./forms/demo_form_sku_with_builder";
import {DemoFormWithValidationsShorthand} from "./forms/demo_form_with_validations_shorthand";
import {DemoFormWithValidationsExplicit} from "./forms/demo_form_with_validations_explicit";
import {DemoFormNgModel} from "./forms/demo_form_ng_model";

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSku,
    DemoFormSkuBuilder,
    DemoFormWithValidationsShorthand,
    DemoFormWithValidationsExplicit,
    DemoFormNgModel
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
