import { Component, OnInit } from '@angular/core';
import {Term} from "../../../model/term";
import {TermsService} from "../../../service/terms.service";
import {DateService} from "../../../service/date.service";

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent{

  vaccinationTerms!: Array<Term>;
  closeTerm: boolean = false;
  createTermValue!: boolean;

  vaccinationDate!: string;
  facilityId!: number;

  constructor(private termsService: TermsService, private dateService: DateService) {
  }


  mapDate() {
    this.vaccinationTerms.map(term => {
      term.vaccinationDate = this.formatDate(term);
    });
  }

  formatDate(term: Term) {
    return this.dateService.formatDate(term.vaccinationDate);
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

  private reloadTerm() {
    setTimeout(() => this.loadTerm(), 500);
  }

  openCreateTermTable() {
    this.closeTerm = false;
    this.createTermValue = !this.createTermValue;
  }

  addTerm() {
    this.termsService.postTerm(this.vaccinationDate, this.facilityId).subscribe();
  }

}
