import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ViewComponent} from './view/view.component';
import {TermsService} from "./service/terms.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AdminViewComponent} from './view/admin-view/admin-view.component';
import {UserViewComponent} from './view/user-view/user-view.component';
import {DateService} from "./service/date.service";
import {FormsModule} from "@angular/forms";
import {TermComponent} from './view/admin-view/term/term.component';
import {UsersComponent} from './view/admin-view/users/users.component';
import {UsersService} from "./service/users.service";
import {VaccinatedUsersComponent} from './view/admin-view/vaccinated-users/vaccinated-users.component';
import {VaccinatedUsersService} from "./service/vaccinated-users.service";
import {FacilityComponent} from './view/admin-view/facility/facility.component';
import {FacilityService} from "./service/facility.service";
import {UserTermComponent} from './view/user-view/user-term/user-term.component';
import {UserTermsService} from "./service/user-terms.service";
import {RoleService} from "./service/role.service";
import {CallbackComponent} from './callback/callback.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthHeaderInterceptor} from "./oauth/interceptor/auth-header.interceptor";
import {AppRoutingModule} from "./routing/app-routing.module";
import {SecurityService} from "./security/security.service";

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
    UserTermComponent,
    CallbackComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TermsService, DateService, UsersService, VaccinatedUsersService, SecurityService,
    FacilityService, UserTermsService, RoleService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
