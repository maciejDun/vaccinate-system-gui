import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Term} from "../model/term";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TermsService {

  constructor(private httpClient: HttpClient) {
  }

  public getTerms(): Observable<Term[]> {
    return this.httpClient.get<Term[]>(environment.baseUrl + '/admin/terms')
  }

  public getFreeTerms(): Observable<Term[]> {
    return this.httpClient.get<Term[]>(environment.baseUrl + '/user/terms')
  }

  public deleteTerm(id: number): Observable<any> {
    let url = environment.baseUrl + '/admin/terms/' + id;
    return this.httpClient.delete(url);
  }

  public postTerm(date: string, id: number) {
    let body = {vaccinationDate: date, facilityId: id}
    return this.httpClient.post(environment.baseUrl + '/admin/terms', body);
  }
}
