import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {NgForSampleApp} from "./ng_for/ng_for";
import {NgSwitchSampleApp} from "./ng_switch/ng_switch";
import {NgStyleSampleApp} from "./ng_style/ng_style";
import {NgClassSampleApp} from "./ng_class/ng_class";
import {NgNonBindableSampleApp} from "./ng_non_bindable/ng_nonbindable";
import {Router, RouterModule, Routes} from "@angular/router";

/**
 * 路由
 * @type {[{path: string; component: NgForSampleApp},{path: string; component: NgSwitchSampleApp},{path: string; component: NgStyleSampleApp},{path: string; component: NgClassSampleApp},{path: string; component: NgNonBindableSampleApp}]}
 */
const routes: Routes=[
  {path:'',redirectTo:'ng_for',pathMatch:'full'},
  {path: 'ng_for', component:NgForSampleApp },
  {path: 'ng_switch', component:NgSwitchSampleApp },
  {path: 'ng_style', component:NgStyleSampleApp },
  {path: 'ng_class', component:NgClassSampleApp},
  {path: 'ng_non_bindable', component:NgNonBindableSampleApp }
];


@Component({
  selector: 'built-in-directives-app',
  template:`
    <div class="ui grid container">
      <div class="four wide column">
        <a class="item"  *ngFor="let item of examples"
           [routerLink]="[item.path]">
          {{ item.label }}
        </a>
      </div>

      <div class="ui main text container eight wide column">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class BuiltInDirectivesApp{
  examples;

  constructor(private router:Router){
    this.examples= [
      {label: 'NgFor',         path: 'ng_for'},
      {label: 'NgSwitch',      path: 'ng_switch'},
      {label: 'NgStyle',       path: 'ng_style' },
      {label: 'NgClass',       path: 'ng_class',},
      {label: 'NgNonBindable', path: 'ng_non_bindable' }
    ];
  }
}





@NgModule({
  declarations: [
    BuiltInDirectivesApp,
    NgForSampleApp,
    NgClassSampleApp,
    NgNonBindableSampleApp,
    NgStyleSampleApp,
    NgSwitchSampleApp
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [BuiltInDirectivesApp]
})
export class AppModule { }
