import {Component, OnInit} from '@angular/core';
import {VaccinatedUsersService} from "../../../service/vaccinated-users.service";
import {VaccinatedUser} from "../../../model/vaccinated.user";
import {DateService} from "../../../service/date.service";
import {Term} from "../../../model/term";
import {Problem} from "../../../model/problem";
import {Error} from "../../../model/error";
import {UsersService} from "../../../service/users.service";
import {TermsService} from "../../../service/terms.service";
import {User} from "../../../model/user";

@Component({
  selector: 'app-vaccinated-users',
  templateUrl: './vaccinated-users.component.html',
  styleUrls: ['./vaccinated-users.component.css']
})
export class VaccinatedUsersComponent implements OnInit {

  vaccinatedUsers!: Array<VaccinatedUser>;
  vaccinationTerms!: Term[];
  users!: User[];

  userId!: number;
  termId!: number;
  selectedUserId!: number;
  selectedTermId!: number;

  closeVaccinatedUserList: boolean = false;
  closeCreateList: boolean = false;
  seeSuccess: boolean = false;
  seeProblem: boolean = false;

  success!: VaccinatedUser;
  problem!: Problem;

  constructor(private vaccinatedUserService: VaccinatedUsersService, private dateService: DateService,
              private userService: UsersService, private termsService: TermsService) {
  }

  ngOnInit(): void {
    this.loadFreeTerm();
    this.loadUser();
  }

  clickLoad() {
    this.closeVaccinatedUserList = !this.closeVaccinatedUserList;
    this.closeCreateList = false;
    if (this.closeVaccinatedUserList) {
      this.loadVaccinatedUsers();
    }
  }

  loadVaccinatedUsers() {
    this.vaccinatedUserService.getVaccinatedUsers().subscribe(users => {
      this.vaccinatedUsers = users;
      this.mapVaccUserDate(this.vaccinatedUsers);
    });
  }

  loadFreeTerm() {
    this.termsService.getFreeTerms().subscribe(terms => {
      this.vaccinationTerms = this.orderTerms(this.mapTermDate(terms));
      this.mapTermDate(terms);
    });
  }

  loadUser() {
    this.userService.getNotRegisteredUsers().subscribe(users => {
      this.users = this.orderUsers(users);
    });
    return this.users;
  }

  private orderUsers(users: Array<User>) {
    users.sort((user1, user2) => {
      if (user1.id > user2.id) return 1;
      else if (user1.id < user2.id) return -1;
      else return 0;
        });
    return users;
  }

  private orderTerms(terms: Array<Term>) {
    terms.sort((term1, term2) => {
      if (term1.id > term2.id) return 1;
      else if (term1.id < term2.id) return -1;
      else return 0;
    });
    return terms;
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

  private mapVaccUserDate(vaccinatedUsers: Array<VaccinatedUser>) {
    vaccinatedUsers.map(vaccUser => {
      vaccUser.term.vaccinationDate = this.formatDateForView(vaccUser.term);
    });
  }

  private mapTermDate(terms: Array<Term>) {
    terms.map(term => {
      term.vaccinationDate = this.formatDateForView(term);
    });
    return terms;
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
