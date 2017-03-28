import {Component, Input, Output, OnInit, EventEmitter, ElementRef} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  outputs: ['loading','results'],
  selector:'search-box',
  template:`
        <div class="input-group">
        <input type="text" class="form-control" placeholder="Search for..." autofocus>
        <span class="input-group-btn">
        <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
        </span>
        </div>
    `

})

export class SearchBoxComponent implements OnInit{
  result: string[];

  loading:EventEmitter<boolean> = new EventEmitter<boolean>();
  results:EventEmitter<string[]> = new EventEmitter<string[]>();

  //ElementRef is an Angular wrapper around an Element
  constructor(private el:ElementRef){

  }


  ngOnInit():void{
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e:any)=> e.target.value)
      .filter((text:string) =>  text.length > 1) //only search where text is greater than 1
      .debounceTime(250)  //give the user a change to stop typing before searching
      .do(()=> this.loading.next(true))  // do allows you to run a function - calling next causes the event emitter to emit a value
      .map((query:string)=> this.result.filter((item)=>{
        console.log('Observing....');
        return item.toLowerCase().indexOf(query.toLowerCase());
      }))
      .subscribe(
        ()=>{//success
            this.loading.next(false);
            this.results.next(this.result);
        },
        (err:any)=>{//error
            console.log(err);
            this.loading.next(false);
        },
        ()=>{//completion
            this.loading.next(false);
        }
      )
  }

}
