import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector:'basic-http',
  template:`<h2> Basic Twitch Call</h2>
        <button type="button" class="btn btn-primary" (click)="getRequest()">Send Call Channel</button>
        <button type="button" class="btn btn-primary" (click)="getRequestUser()">Send Call User</button>
        <div *ngIf="loading">...loading'</div>
        <pre>{{ data | json }}</pre>`
})
 export class BasicHTTPComponent{
      data: Object;
      loading: boolean;
      baseUri: string = "https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/";
      testStream : string ="/streams/ESL_SC2";
      testUser :string = "/users/ESL_SC2";

      constructor(private http: Http){

      }

      getRequest():void {
          this.loading = true;
          this.http.request(this.baseUri + this.testStream)
            .subscribe((res: Response)=>{
                this.data = res.json();
                this.loading = false;
            })


        }

      getRequestUser():void {
        this.loading = true;
        this.http.request(this.baseUri + this.testUser)
          .subscribe((res: Response)=>{
            this.data = res.json();
            this.loading = false;
          })


      }
      }
