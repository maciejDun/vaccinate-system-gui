import {Component} from '@angular/core';
import {UsersService} from "../../../service/users.service";
import {User} from "../../../model/user";
import {Roles} from "../../../model/roles";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users!: Array<User>;

  userName!: string;
  roles!: Roles;

  closeUserList: boolean = false;
  closeCreateList: boolean = false;

  constructor(private userService: UsersService) {
  }

  clickLoad() {
    this.closeUserList = !this.closeUserList;
    this.closeCreateList = false;
    this.loadUsers()
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
  });
  }

  reloadUsers() {
    setTimeout(() => this.loadUsers(), 500);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();
    this.reloadUsers();
  }

  openCreateUserTable() {
    this.closeUserList = false;
    this.closeCreateList = !this.closeCreateList;
  }

  addUser() {
    this.userService.postUser(this.userName, this.roles).subscribe();
  }
}
