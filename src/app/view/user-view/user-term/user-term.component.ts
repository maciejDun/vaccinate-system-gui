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
  registeredTerm!: Term;
  problem!: Problem

  signedToTerm: boolean = false;

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

  signToTerm(id: number) {
    this.userTermsService.signToTerm(id).subscribe(
      success => {
        this.registeredTerm = (<Term>success);
        this.signedToTerm = true;
      },
      error => {
       this.problem = (<Error>error).error;
      });
  }

  unregisterTerm() {

  }
}
