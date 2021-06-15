import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Facility} from "../model/facility";
import {Roles} from "../model/roles";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private httpClient: HttpClient) { }

  public getFacilities(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>('http://localhost:8080/admin/facility')
  }

  public deleteFacility(id: number) {
    return this.httpClient.delete('http://localhost:8080/admin/facility/' + id);
  }

  public postFacility(country: string, state: string, city: string, address: string) {
    let body = {country: country, state: state, city: city, address: address};
    return this.httpClient.post('http://localhost:8080/admin/facility', body);
  }
}
