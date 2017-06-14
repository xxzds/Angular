import {Component} from "@angular/core";
import {Http,Response,Jsonp, URLSearchParams} from "@angular/http";

@Component({
   selector:'simple-http',
   template:`     
     <h2>Basic Request</h2>
     <button type="button" (click)="makeRequest()" >Make Request</button>
     <div *ngIf="loading">loading...</div>
     <pre>{{data | json}}</pre>
   `
})


export  class SimpleHTTPComponent {
   data : Object;
   loading : boolean;







   constructor(private http:Http){

   }

   makeRequest():void{
        this.loading=true;
        //http://localhost:9999/tookApp/tbk/getItem
        //http://jsonplaceholder.typicode.com/posts/1
        this.http.request('http://localhost:9999/tookApp/tbk/getItem?callback=JSONP_CALLBACK')
          .subscribe((res:Response) => {
                this.data=res.json();
                this.loading=false;
          },(error) =>{
               console.log(error);
     });


     /* constructor(private jsonp:Jsonp) {
      }*/


     /*this.jsonp.get('http://localhost:9999/tookApp/tbk/getItem?callback=JSONP_CALLBACK')
       .subscribe((res) => {
         console.log( res.json() );
         this.data=res.json();
         this.loading=false;
       },(error) => {
          console.log(error);
       });*/


   }
}
