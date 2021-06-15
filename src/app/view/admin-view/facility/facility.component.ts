import {Component} from '@angular/core';
import {Facility} from "../../../model/facility";
import {FacilityService} from "../../../service/facility.service";
import {Problem} from "../../../model/problem";
import {Error} from "../../../model/error";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent {

  closeFacilitiesList: boolean = false;
  closeCreateList: boolean = false;
  seeSuccess: boolean = false;
  seeProblem: boolean = false;

  facilities!: Array<Facility>;
  country!: string;
  state!: string;
  city!: string;
  address!: string;

  success!: Facility;
  problem!: Problem;

  constructor(private facilityService: FacilityService) {
  }

  clickLoad() {
    this.closeFacilitiesList = !this.closeFacilitiesList;
    this.closeCreateList = false;
    this.loadFacilities();
  }

  openAddFacility() {
    this.closeFacilitiesList = false;
    this.closeCreateList = !this.closeCreateList;
  }

  private loadFacilities() {
    this.facilityService.getFacilities().subscribe(facilities => {
        this.facilities = facilities;
      }
    );
  }

  deleteFacility(id: number) {
    this.facilityService.deleteFacility(id).subscribe();
    this.reloadVaccinatedUsers();
  }

  private reloadVaccinatedUsers() {
    setTimeout(() => this.loadFacilities(), 500);
  }

  addFacility(country: string, state: string, city: string, address: string) {
    this.facilityService.postFacility(country, state, city, address).subscribe(
      success => {
        this.success = (<Facility>success);
        this.seeSuccessDiv();
      },
      error => {
        this.problem = (<Error>error).error;
        this.seeProblemDiv();
      }
    );
  }

  private seeProblemDiv() {
    this.seeSuccess = false;
    this.seeProblem = true;
  }

  private seeSuccessDiv() {
    this.seeSuccess = true;
    this.seeProblem = false;
  }
}
