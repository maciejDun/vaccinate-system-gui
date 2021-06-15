import { Component, OnInit } from '@angular/core';
import {VaccinatedUsersService} from "../../../service/vaccinated-users.service";
import {VaccinatedUser} from "../../../model/vaccinated.user";
import {DateService} from "../../../service/date.service";
import {Term} from "../../../model/term";
import {Problem} from "../../../model/problem";
import {Error} from "../../../model/error";

@Component({
  selector: 'app-vaccinated-users',
  templateUrl: './vaccinated-users.component.html',
  styleUrls: ['./vaccinated-users.component.css']
})
export class VaccinatedUsersComponent implements OnInit {

  vaccinatedUsers!: Array<VaccinatedUser>;
  userId!: number;
  termId!: number;

  success!: VaccinatedUser;
  problem!: Problem;

  closeVaccinatedUserList: boolean = false;
  closeCreateList: boolean = false;
  seeSuccess: boolean = false;
  seeProblem: boolean = false;


  constructor(private vaccinatedUserService: VaccinatedUsersService, private dateService: DateService) { }

  ngOnInit(): void {
  }

  clickLoad() {
    this.closeVaccinatedUserList = !this.closeVaccinatedUserList;
    this.closeCreateList = false;
    this.loadVaccinatedUsers();
  }

  loadVaccinatedUsers() {
    this.vaccinatedUserService.getVaccinatedUsers().subscribe(users => {
      this.vaccinatedUsers = users;
      this.mapDate(this.vaccinatedUsers);
    });
  }

  openAddVaccinatedUser() {
    this.closeVaccinatedUserList = false;
    this.closeCreateList = !this.closeCreateList;
  }

  addVaccinatedUser(userId: number, termId: number) {
    this.vaccinatedUserService.postVaccinatedUser(userId, termId).subscribe(
      success => {
        this.success = (<VaccinatedUser>success);
        this.success.term.vaccinationDate = this.formatDateForView(this.success.term);
        this.seeSuccessDiv();
      },
      error => {
        this.problem = (<Error>error).error;
        this.seeProblemDiv();
      }
    );
  }

  deleteVaccinatedUser(id: number) {
    this.vaccinatedUserService.deleteVaccinatedUser(id).subscribe();
    this.reloadVaccinatedUsers();
  }

  private mapDate(vaccinatedUsers: Array<VaccinatedUser>) {
    vaccinatedUsers.map(vaccUser => {
      vaccUser.term.vaccinationDate = this.formatDateForView(vaccUser.term);
    });
  }

  private formatDateForView(term: Term) {
    return this.dateService.formatDateForView(term.vaccinationDate);
  }

  private reloadVaccinatedUsers() {
    setTimeout(() => this.loadVaccinatedUsers(), 500);
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
