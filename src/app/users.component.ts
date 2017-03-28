import {Component} from '@angular/core';

@Component({
  selector:'users',
  template:`<h2> Channel List</h2>
        <search-box 
        (loading)="loading = $event"
        (results)="updateResults($event)"
        ></search-box>
        <div ><user *ngFor="let user of channelList" [channelName]="user"></user></div>`
})

export class UsersComponent{
  userList:string[] = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","test-channel"];
  channelList:string[];

    constructor(){
        this.channelList = this.userList;
    }

  updateResults(results:string[]):void{
      console.log('called');
      this.channelList = results;
  }

    onKey(value:string){
      this.userList.filter((item)=>{
        return item.toLowerCase().indexOf(value.toLowerCase());
      })
    }

}


