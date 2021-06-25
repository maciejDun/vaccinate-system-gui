import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../model/role";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient: HttpClient) {
  }

  public getRoles(): Observable<Role[]> {
    return this.httpClient.get<Role[]>('http://localhost:8080/admin/roles')
  }
}
