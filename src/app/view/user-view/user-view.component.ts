import { Component, OnInit } from '@angular/core';
import {Term} from "../../model/term";
import {TermsService} from "../../service/terms.service";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

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
