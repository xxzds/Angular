import { Component } from '@angular/core';

@Component({
  selector: 'router-app',
  template:`
  <div>
    <div>Navigation:
      <ul>
          <li><a  [routerLink]="['home']">Home</a></li>
          <li><a  [routerLink]="['about']">About</a></li>
          <li><a  [routerLink]="['contact']">Contact</a></li>
      </ul>
    </div>
    
    <router-outlet></router-outlet>
  </div>  
    
  `
})
export class AppComponent {
  title = 'app';
}
