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
    return this.httpClient.get<User[]>(environment.baseUrl + '/admin/users')
  }

  loadCurrentUser(): Observable<User> {
    return this.httpClient.get<User>(environment.baseUrl + '/user');
  }

  public getNotRegisteredUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.baseUrl + '/admin/not-registered-users')
  }

  deleteUser(id: number) {
    return this.httpClient.delete(environment.baseUrl + '/admin/users/' + id);
  }

  public postUser(name: string, roleId: number) {
    let body = {userName: name, roleId: roleId}
    return this.httpClient.post(environment.baseUrl + '/admin/users', body);
  }

  public putUser(name: string, roleId: number, userId: number) {
    let body = {id: userId, userName: name, roleId: roleId}
    return this.httpClient.put(environment.baseUrl + '/admin/users', body);
  }

}
