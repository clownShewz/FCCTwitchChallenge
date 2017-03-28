import {Component, Input, AfterViewInit} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector:'user-detail',
  template:`
<a href={{userLink}}  target="_blank">{{channelName}}
      <img src={{logoUrl}}  class="img-rounded"  width="50" height="50" style="float:left;">
      <h4 style="float:left; padding-left:25px">{{userName}}</h4>
  </a>
`
})

export class UserDetailComponent implements AfterViewInit{
  @Input() userName:string;
  logoUrl:string;
  userLink:string;

  baseUserUri: string = "https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/users/";
  baseSiteURI: string = "https://www.twitch.tv/"
  constructor(private http:Http){

  }

  getUserDetail():void{
    this.http.request(this.baseUserUri + this.userName)
      .subscribe((res:Response)=>{
          var data = res.json();
          this.logoUrl = data.logo
          //this.userLink = data._links.self; can't use the api version may not work at all this way but definitely won't work without proper api set up. 
          this.userLink = this.baseSiteURI + this.userName;
          console.log(data.logo);
      })

  }

  ngAfterViewInit():void {
     this.getUserDetail();
    }

}


