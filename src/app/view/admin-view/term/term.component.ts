import {Component} from '@angular/core';
import {Term} from "../../../model/term";
import {TermsService} from "../../../service/terms.service";
import {DateService} from "../../../service/date.service";
import {Problem} from "../../../model/problem";
import {Error} from "../../../model/error";

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent {

  vaccinationTerms!: Array<Term>;
  vaccinationDate!: string;
  facilityId!: number;

  closeTerm: boolean = false;
  createTermValue!: boolean;
  seeSuccess: boolean = false;
  seeProblem: boolean = false;

  problem!: Problem;
  success!: Term;


  constructor(private termsService: TermsService, private dateService: DateService) {
  }

  clickLoad() {
    this.closeTerm = !this.closeTerm;
    this.createTermValue = false;
    this.loadTerm();
  }

  loadTerm() {
    this.termsService.getTerms().subscribe(terms => {
      this.vaccinationTerms = terms;
      this.mapDate();
    });
  }

  deleteTerm(id: number) {
    this.termsService.deleteTerm(id).subscribe();
    this.reloadTerm();
  }

  openCreateTermTable() {
    this.closeTerm = false;
    this.createTermValue = !this.createTermValue;
  }

  addTerm() {
    let formattedDataForSave = this.formatDateForSave(this.vaccinationDate)
    this.termsService.postTerm(formattedDataForSave, this.facilityId).subscribe(
      data => {
        this.success = (<Term>data);
        this.seeSuccessDiv();
      },
      error => {
        this.problem = (<Error>error).error;
        this.seeProblemDiv();
      });
  }

  private reloadTerm() {
    setTimeout(() => this.loadTerm(), 500);
  }

  private mapDate() {
    this.vaccinationTerms.map(term => {
      term.vaccinationDate = this.formatDateForView(term);
    });
  }

  private formatDateForView(term: Term) {
    return this.dateService.formatDateForView(term.vaccinationDate);
  }

  private formatDateForSave(date: string) {
    return this.dateService.formatDateForSave(date);
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
