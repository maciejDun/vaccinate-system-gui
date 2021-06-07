import {Component, OnInit} from '@angular/core';
import {TermsService} from "../service/terms.service";
import {Term} from "../model/term";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  vaccinationTerms!: Array<Term>;


  constructor(private termsService: TermsService) {
  }

  ngOnInit(): void {

  }

  load() {
    this.termsService.getTerms().subscribe(terms => {
      this.vaccinationTerms = terms;
      console.log(terms)
    });
  }

}
