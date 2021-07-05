import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../model/role";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient: HttpClient) {
  }

  public getRoles(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(environment.baseUrl + '/admin/roles')
  }
}
