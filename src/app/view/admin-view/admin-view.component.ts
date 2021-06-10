import {Component} from '@angular/core';
import {Term} from "../../model/term";
import {TermsService} from "../../service/terms.service";
import {DateService} from "../../service/date.service";

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent{

  vaccinationTerms!: Array<Term>;
  closeTerm!: boolean;
  createTermValue!: boolean;
  vaccinationDate!: string;

  constructor(private termsService: TermsService, private  dateService: DateService) {
  }


  mapDate() {
    this.vaccinationTerms.map( term => {
      term.vaccinationDate = this.formatDate(term);
    });
  }

  formatDate(term: Term) {
    return this.dateService.formatDate(term.vaccinationDate);
      }

  loadTerm() {
    this.termsService.getTerms().subscribe(terms => {
      this.vaccinationTerms = terms;
      this.closeTerm = true;
      this.mapDate();
    });
  }

  deleteTerm(id: number) {
    this.termsService.deleteTerm(id).subscribe();
    setTimeout(() => this.loadTerm(), 500);
  }

  closeTerms() {
    this.closeTerm = false;
  }

  createTerm() {
    this.closeTerm = false;
    this.createTermValue = !this.createTermValue;
  }
}
