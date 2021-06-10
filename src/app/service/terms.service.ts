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
    return this.httpClient.get<Term[]>('http://localhost:8080/user/terms')
  }

  public deleteTerm(id: number): Observable<any> {
    let url = 'http://localhost:8080/admin/terms/' + id;
    return this.httpClient.delete(url);
  }
}
