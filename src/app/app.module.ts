import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import {TermsService} from "./service/terms.service";
import {HttpClientModule} from "@angular/common/http";
import { AdminViewComponent } from './view/admin-view/admin-view.component';
import { UserViewComponent } from './view/user-view/user-view.component';
import {DateService} from "./service/date.service";

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AdminViewComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TermsService, DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
