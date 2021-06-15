import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Term} from "../model/term";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserTermsService {

  constructor(private httpClient: HttpClient) { }

  public getTerms(): Observable<Term[]> {
    return this.httpClient.get<Term[]>('http://localhost:8080/user/terms')
  }

  signToTerm(id: number): Observable<Term> {
    return this.httpClient.get<Term>('http://localhost:8080/user/terms/register/' + id);
  }
}
