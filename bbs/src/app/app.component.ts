import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {User} from "./user/model/user-model";
import {UserLoginService} from "./user/user-login/user-login.service";
import {ToastsManager} from "ng2-toastr";
import {Router} from "@angular/router";
import {UserRegisterService} from "./user/user-register/user-register.service";
import 'rxjs/add/operator/merge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  public currentUser:User;

  constructor(
    private userLoginService: UserLoginService,
    private userRegisterService:UserRegisterService,
    private toastsManager:ToastsManager,
    private router:Router,
    private vcr: ViewContainerRef
  ){
    this.toastsManager.setRootViewContainerRef(vcr);
  }

  ngOnInit(){
    console.log("app.component ngOnInit");

    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log("当前对象为："+this.currentUser);

    this.userLoginService.currentUser()
      .merge(this.userRegisterService.currentUser())
      .subscribe(
        data =>{
            this.currentUser=data;

           //如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
           if(this.router.routerState.snapshot.url.indexOf("/login")!=-1){

           }
          this.router.navigateByUrl('');
        },
        error =>{
          console.log(error);
        }
      )
  }


  /**
   * 退出
   */
  doLogout():void{
      this.userLoginService.loginOut();
      this.toastsManager.success('退出成功!','系统提示');
      this.router.navigateByUrl('');
  }
}
