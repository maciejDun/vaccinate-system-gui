import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Term} from "../model/term";

@Injectable({
  providedIn: 'root'
})
export class TermsService {

  constructor(private httpClient: HttpClient) { }

  public getTerms(): Observable<Term[]> {
    return this.httpClient.get<Term[]>('http://localhost:8080/test/terms')
  }
}
