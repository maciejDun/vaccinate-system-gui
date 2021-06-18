import {Component, ViewChild} from '@angular/core';
import {Term} from "../../model/term";
import {TermsService} from "../../service/terms.service";
import {DateService} from "../../service/date.service";
import {FacilityComponent} from "./facility/facility.component";
import {TermComponent} from "./term/term.component";
import {UsersComponent} from "./users/users.component";
import {VaccinatedUsersComponent} from "./vaccinated-users/vaccinated-users.component";

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {

  @ViewChild(FacilityComponent) facilityComponent!:FacilityComponent;
  @ViewChild(TermComponent) termComponent!:TermComponent;
  @ViewChild(UsersComponent) usersComponent!:UsersComponent;
  @ViewChild(VaccinatedUsersComponent) vaccUsersComponent!:VaccinatedUsersComponent;

  constructor() {
  }

  clickLoadFacilities() {
      this.facilityComponent.clickLoad();
  }

  openAddFacility() {
    this.facilityComponent.openAddFacility();
  }

  clickLoadTerms() {
    this.termComponent.clickLoad();
  }

  openCreateTermTable() {
    this.termComponent.openCreateTermTable();
  }

  clickLoadUsers() {
    this.usersComponent.clickLoad();
  }

  openCreateUserTable() {
    this.usersComponent.openCreateUserTable();
  }

  openUpdateUserTable() {
    this.usersComponent.openUpdateUserTable();
  }

  clickLoadVaccUsers() {
    this.vaccUsersComponent.clickLoad();
  }

  openAddVaccinatedUser() {
    this.vaccUsersComponent.openAddVaccinatedUser();
  }
}
