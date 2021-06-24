import {Component, OnInit} from '@angular/core';
import {Term} from "../../../model/term";
import {UserTermsService} from "../../../service/user-terms.service";
import {DateService} from "../../../service/date.service";
import {Problem} from "../../../model/problem";
import {Error} from "../../../model/error";

@Component({
  selector: 'app-user-term',
  templateUrl: './user-term.component.html',
  styleUrls: ['./user-term.component.css']
})
export class UserTermComponent implements OnInit {

  vaccinationTerms!: Array<Term>;
  message!: string;

  registeredTerm!: Term;
  problem!: Problem;

  seeSuccess: boolean = false;
  seeProblem: boolean = false;
  seeTerms: boolean = true;
  seeUnregister: boolean = false;

  constructor(private userTermsService: UserTermsService, private dateService: DateService) {
  }

  ngOnInit(): void {
    this.loadTerm();
  }

  loadTerm() {
    this.userTermsService.getTerms().subscribe(terms => {
      this.vaccinationTerms = terms;
      this.mapDate();
    });
  }

  private mapDate() {
    this.vaccinationTerms.map(term => {
      term.vaccinationDate = this.formatDateForView(term);
    });
  }

  private formatDateForView(term: Term) {
    return this.dateService.formatDateForView(term.vaccinationDate);
  }

  signToTerm(termId: number) {
    this.userTermsService.signToTerm(termId).subscribe(
      success => {
        this.registeredTerm = (<Term>success);
        this.seeSuccessDiv();
      },
      error => {
        this.problem = (<Error>error).error;
        this.seeProblemDiv();
      });
  }

  unregisterTerm() {
    this.userTermsService.unregister().subscribe(
      success => {
        this.seeUnregisterDiv();
      },
      error => {
        this.problem = (<Error>error).error;
        this.seeProblemDiv();
      }
    )
  }

  private seeProblemDiv() {
    this.seeSuccess = false;
    this.seeProblem = true;
    this.seeTerms = false;
    this.seeUnregister = false;
  }

  private seeSuccessDiv() {
    this.seeSuccess = true;
    this.seeProblem = false;
    this.seeTerms = false;
    this.seeUnregister = false;
  }

  private seeUnregisterDiv() {
    this.seeSuccess = false;
    this.seeProblem = false;
    this.seeTerms = false;
    this.seeUnregister = true;
  }
}
