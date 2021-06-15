import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Term} from "../model/term";
import {User} from "../model/user";
import {Roles} from "../model/roles";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:8080/admin/users')
  }

  deleteUser(id: number) {
    return this.httpClient.delete('http://localhost:8080/admin/users/' + id);
  }

  public postUser(name: string, roles: Roles) {
    let body = {userName: name, roles: roles}
    return this.httpClient.post('http://localhost:8080/admin/users', body);
  }
}
