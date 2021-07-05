import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {VaccinatedUser} from "../model/vaccinated.user";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VaccinatedUsersService {

  constructor(private httpClient: HttpClient) {
  }

  public getVaccinatedUsers(): Observable<VaccinatedUser[]> {
    return this.httpClient.get<VaccinatedUser[]>(environment.baseUrl + '/admin/vaccinated-users')
  }

  deleteVaccinatedUser(id: number) {
    return this.httpClient.delete(environment.baseUrl + '/admin/vaccinated-users/' + id);
  }

  public postVaccinatedUser(userId: number, termId: number) {
    let url = environment.baseUrl + '/admin/vaccinated-users?userId=' + userId + '&termId=' + termId;
    return this.httpClient.post(url, null);
  }
}
