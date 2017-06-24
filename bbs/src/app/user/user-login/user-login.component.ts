import { Component, OnInit } from '@angular/core';
import {User} from "../model/user-model";
import {UserLoginService} from "./user-login.service";
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterState, RouterStateSnapshot} from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public user:User = new User();

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public userLoginService:UserLoginService
  ) {
    console.log(this.userLoginService);
  }

  ngOnInit() {
    console.log("--- user-login-component ---");
    console.log(this.router);
    console.log(this.activatedRoute);

    let activatedRouteSnapshot:ActivatedRouteSnapshot=this.activatedRoute.snapshot;
    let routerState: RouterState = this.router.routerState;
    let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

    console.log(activatedRouteSnapshot);
    console.log(routerState);
    console.log(routerStateSnapshot);
  }

  public doLogin():void{

    this.userLoginService.login(this.user);

  }

}
