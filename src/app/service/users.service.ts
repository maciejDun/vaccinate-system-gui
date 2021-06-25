import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:8080/admin/users')
  }

  loadCurrentUser(): Observable<User> {
    return this.httpClient.get<User>(environment.baseUrl + '/user');
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

  public putUser(name: string, roleId: number, userId: number) {
    let body = {id: userId, userName: name, roleId: roleId}
    return this.httpClient.put('http://localhost:8080/admin/users', body);
  }

}
