import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {VaccinationTerm} from "../model/vaccinationTerm";

@Injectable({
  providedIn: 'root'
})
export class TermsService {

  constructor(private httpClient: HttpClient) { }

  public getTerms(): Observable<VaccinationTerm[]> {
    return this.httpClient.get<VaccinationTerm[]>('http://localhost:8080/terms')
  }
}
