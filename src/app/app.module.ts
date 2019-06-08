import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list.component';
import { BackgroundDirective } from './directive/background.directive';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import {ApiService} from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BackgroundDirective,
    ParentComponentComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // services: [
  //     ApiService
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
