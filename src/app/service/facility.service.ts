import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Facility} from "../model/facility";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private httpClient: HttpClient) {
  }

  public getFacilities(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(environment.baseUrl + '/admin/facility')
  }

  public deleteFacility(id: number) {
    return this.httpClient.delete(environment.baseUrl + '/admin/facility/' + id);
  }

  public postFacility(country: string, state: string, city: string, address: string) {
    let body = {country: country, state: state, city: city, address: address};
    return this.httpClient.post(environment.baseUrl + '/admin/facility', body);
  }
}
