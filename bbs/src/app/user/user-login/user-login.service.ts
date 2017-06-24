import {Injectable} from "@angular/core";
import {User} from "../model/user-model";
import {Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";

@Injectable()
export class UserLoginService{
  public userLoginURL = 'mock-data/user-login-mock.json';
  public subject: Subject<User> = new Subject<User>();

  constructor(
    public http:Http
  ){}

  public login(user:User){
    return this.http
      .get(this.userLoginURL)
      .map((response:Response) =>{       //重构数据
            let user = response.json();
            console.log("user object>"+user);
            if(user && user.token) {
              localStorage.setItem( "currentUser", JSON.stringify( user ) );
              this.subject.next( Object.assign( {}, user ) );
            }
            return response;
        }


      )
      .subscribe(
        data =>{
          console.log("login success>"+data.toString());
        },
        error =>{
          console.error(error);
        }
      )
  }
}
