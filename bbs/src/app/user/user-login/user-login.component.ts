import { Component, OnInit } from '@angular/core';
import {User} from "../model/user-model";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public user:User = new User();

  constructor() { }

  ngOnInit() {
  }

  public doLogin():void{
    console.log(this.user);
  }

}
