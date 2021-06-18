import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:8080/admin/users')
  }

  public getNotRegisteredUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:8080/admin/not-registered-users')
  }

  deleteUser(id: number) {
    return this.httpClient.delete('http://localhost:8080/admin/users/' + id);
  }

  public postUser(name: string, roleId: number) {
    let body = {userName: name, roleId: roleId}
    return this.httpClient.post('http://localhost:8080/admin/users', body);
  }
}
