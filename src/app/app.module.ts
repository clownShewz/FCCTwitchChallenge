import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BasicHTTPComponent} from './BasicHTTPComponent';
import {UsersComponent} from './users.component';
import {UserComponent} from './user.component';
import {UserDetailComponent} from './user.detail';
import {SearchBoxComponent} from "./app.search";


@NgModule({
  declarations: [
    AppComponent,
    BasicHTTPComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
