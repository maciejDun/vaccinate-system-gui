import {Component} from '@angular/core';
import {UsersService} from "../../../service/users.service";
import {User} from "../../../model/user";
import {Problem} from "../../../model/problem";
import {Error} from "../../../model/error";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users!: Array<User>;

  userName!: string;
  roleId!: number;

  success!: User;
  problem!: Problem;

  closeUserList: boolean = false;
  closeCreateList: boolean = false;
  seeSuccess: boolean = false;
  seeProblem: boolean = false;

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

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();
    this.reloadUsers();
  }

  openCreateUserTable() {
    this.closeUserList = false;
    this.closeCreateList = !this.closeCreateList;
  }

  addUser() {
    this.userService.postUser(this.userName, this.roleId).subscribe(
      success => {
        this.success = (<User>success);
        this.seeSuccessDiv();
      },
      error => {
        this.problem = (<Error>error).error;
        this.seeProblemDiv();
      }
    );
  }

  private reloadUsers() {
    setTimeout(() => this.loadUsers(), 500);
  }

  private seeProblemDiv() {
    this.seeSuccess = false;
    this.seeProblem = true;
  }

  private seeSuccessDiv() {
    this.seeSuccess = true;
    this.seeProblem = false;
  }
}
