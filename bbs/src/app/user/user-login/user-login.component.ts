import { Component, OnInit } from '@angular/core';
import {User} from "../model/user-model";
import {UserLoginService} from "./user-login.service";
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterState, RouterStateSnapshot} from "@angular/router";
import {fadeIn} from "../../animations/fade-in";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  animations:[fadeIn]
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
   /* console.log("--- user-login-component ---");
    console.log(this.router);
    console.log(this.activatedRoute);

    let activatedRouteSnapshot:ActivatedRouteSnapshot=this.activatedRoute.snapshot;
    let routerState: RouterState = this.router.routerState;
    let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

    console.log(activatedRouteSnapshot);
    console.log(routerState);
    console.log(routerStateSnapshot);*/
  }

  public doLogin():void{
    this.userLoginService.login(this.user);
    /*this.router.navigateByUrl('');*/
    //此处不跳转，通过监听当前用户的值改变，在进行逻辑判断，跳转
  }

  /**
   * 忘记密码
   */
  public forgetPwd():void{
    this.router.navigateByUrl("forgetpwd");
  }

}
