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
import { VaccinatedUsersComponent } from './view/admin-view/vaccinated-users/vaccinated-users.component';
import {VaccinatedUsersService} from "./service/vaccinated-users.service";
import { FacilityComponent } from './view/admin-view/facility/facility.component';
import {FacilityService} from "./service/facility.service";
import { UserTermComponent } from './view/user-view/user-term/user-term.component';
import {UserTermsService} from "./service/user-terms.service";

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AdminViewComponent,
    UserViewComponent,
    TermComponent,
    UsersComponent,
    VaccinatedUsersComponent,
    FacilityComponent,
    UserTermComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TermsService, DateService, UsersService, VaccinatedUsersService, FacilityService, UserTermsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
