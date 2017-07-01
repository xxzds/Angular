import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {User} from "../model/user-model";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserRegisterService{
  public userRegisterURL = "mock-data/user-register-mock.json";
  public subject:Subject<User> =new Subject<User>();

  constructor(
    public http:Http
  ){}

  public currentUser():Observable<User>{
      return this.subject.asObservable();
  }

  public register(user:User){
      return this.http.get(this.userRegisterURL)
        .map((response:Response) =>{
            let user = response.json();
            localStorage.setItem("currentUser",JSON.stringify(user));
            this.subject.next(user);
            return response;
        })
  }
}
