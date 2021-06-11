import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import {TermsService} from "./service/terms.service";
import {HttpClientModule} from "@angular/common/http";
import { AdminViewComponent } from './view/admin-view/admin-view.component';
import { UserViewComponent } from './view/user-view/user-view.component';
import {DateService} from "./service/date.service";
import {FormsModule} from "@angular/forms";
import { TermComponent } from './view/admin-view/term/term.component';
import { UsersComponent } from './view/admin-view/users/users.component';
import {UsersService} from "./service/users.service";

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AdminViewComponent,
    UserViewComponent,
    TermComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TermsService, DateService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
