import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {routes} from './app.routes'

import { AppComponent }  from './app.component';
import {HighlightDirective} from "./highlight.directive";
import {CreateTaskComponent} from "./create-task/create-task.component";
import {ListTaskComponent} from "./list-task/list-task.component";
import {AppService} from "./app.service";

@NgModule({
  imports:      [ BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  declarations: [ AppComponent, HighlightDirective, CreateTaskComponent, ListTaskComponent],
  bootstrap:    [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }
