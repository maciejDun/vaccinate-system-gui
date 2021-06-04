import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import {TermsService} from "./service/terms.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TermsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
