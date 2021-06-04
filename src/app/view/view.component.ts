import {Component, OnInit} from '@angular/core';
import {TermsService} from "../service/terms.service";
import {VaccinationTerm} from "../model/vaccinationTerm";
import {VaccinationFacility} from "../model/vaccinationFacility";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  vaccinationTerms!: VaccinationTerm;
  vaccinationFacility!: VaccinationFacility;


  constructor(private termsService: TermsService) {
  }

  ngOnInit(): void {

  }

  load() {
    this.termsService.getTerms().subscribe(terms => {
      this.vaccinationTerms = terms;
      this.vaccinationFacility = terms.vaccinationFacility
    });
  }

}
