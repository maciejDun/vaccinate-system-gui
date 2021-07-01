import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Term} from "../model/term";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserTermsService {

  constructor(private httpClient: HttpClient) {
  }

  public getTerms(): Observable<Term[]> {
    return this.httpClient.get<Term[]>(environment.baseUrl + '/user/terms')
  }

  public signToTerm(id: number): Observable<Term> {
    return this.httpClient.get<Term>(environment.baseUrl + '/user/terms/register/' + id);
  }

  public unregister() {
    return this.httpClient.delete(environment.baseUrl + '/user/terms/unregister');
  }

  loadRegisteredTerm(): Observable<Term> {
    return this.httpClient.get<Term>(environment.baseUrl + '/user/is-registered');
  }
}
