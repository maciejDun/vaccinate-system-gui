import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {VaccinatedUser} from "../model/vaccinated.user";

@Injectable({
  providedIn: 'root'
})
export class VaccinatedUsersService {

  constructor(private httpClient: HttpClient) {
  }

  public getVaccinatedUsers(): Observable<VaccinatedUser[]> {
    return this.httpClient.get<VaccinatedUser[]>('http://localhost:8080/admin/vaccinated-users')
  }

  deleteVaccinatedUser(id: number) {
    return this.httpClient.delete('http://localhost:8080/admin/vaccinated-users/' + id);
  }

  public postVaccinatedUser(userId: number, termId: number) {
    let url = 'http://localhost:8080/admin/vaccinated-users?userId=' + userId + '&termId=' + termId;
    return this.httpClient.post(url, null);
  }
}
