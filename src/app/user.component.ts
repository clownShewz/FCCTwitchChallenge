import {Component, Input} from '@angular/core';
import {Http, Response} from '@angular/http';
import {getUrlScheme} from "@angular/compiler";

@Component({
  selector:'user',
  template:`
            <div class="row" >
            <h3>
            <span *ngIf="userStat=='online'" class="glyphicon glyphicon-flash" style="float:left; padding-right:25px;"></span>
            <span *ngIf="userStat=='offline'" class="glyphicon glyphicon-time" style="float:left; padding-right:25px;"></span>
            <user-detail [userName]="channelName"></user-detail>
            </h3> 
            </div>
`
})

export class UserComponent {
   @Input() channelName:string;

    loading:boolean;
    isOnline:boolean;
    userStat:string;
    stream:Object;
    links:Object;
    channelUrl:string;
    channelStatus:string;

    baseStreamUri: string = "https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/";


    constructor(private http:Http){

    }

    //Properties are not available until after the view is rendered/constructor fires.
    //The lifecycle hook below will fire code after the view is initialized

   ngAfterViewInit(){
      this.getUserStatus();
    }

    getUserStatus():void {

        this.http.request(this.baseStreamUri + this.channelName)
          .subscribe((res:Response)=>{
              var data = res.json();
              this.stream = data.stream;
              this.links = data._links;

              this.setIsOnline();

              if(this.isOnline){
                this.channelStatus = data.stream.status;
                this.channelUrl = data.stream.url;
              }
              this.loading = false;

              console.log(data.stream.url);
          });
    }

    setIsOnline():void{
      this.isOnline = false;

      if (this.stream !== null){
        this.isOnline = true;
        this.userStat = 'online';
      } else{
        this.isOnline = false;
        this.userStat = 'offline';
      }
  }

}



