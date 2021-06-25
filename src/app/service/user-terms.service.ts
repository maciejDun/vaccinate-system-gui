import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Term} from "../model/term";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserTermsService {

  constructor(private httpClient: HttpClient) {
  }

  public getTerms(): Observable<Term[]> {
    return this.httpClient.get<Term[]>('http://localhost:8080/user/terms')
  }

  public signToTerm(id: number): Observable<Term> {
    return this.httpClient.get<Term>('http://localhost:8080/user/terms/register/' + id);
  }

  public unregister() {
    return this.httpClient.delete('http://localhost:8080/user/terms/unregister');
  }

  loadRegisteredTerm(): Observable<Term> {
    return this.httpClient.get<Term>('http://localhost:8080/user/is-registered');
  }
}
