import {Injectable} from "@angular/core";
import {Http,URLSearchParams,Response} from "@angular/http";
import {Post} from "../model/post-model";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class PostListService{
  public postListURL = 'mock-data/postlist-mock.json';
  public postListSearchURL = 'mock-data/postlist-search-mock.json';

  constructor(private http:Http) { }

  public getPostList(searchText: string,page:number=1):Observable<Post[]>{
    let url = this.postListURL;
    let params = new URLSearchParams();
    if (searchText) {
      params.set('searchText',searchText);
      url = this.postListSearchURL;
      console.log(`searchText=${searchText}`);
    }
    params.set('page',String(page));

    return this.http
      .get(url,{search:params})
      .map((res:Response) => {
        let result=res.json();
        console.log(result);
        return result;
      })
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}
