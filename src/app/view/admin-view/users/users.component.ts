import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../service/users.service";
import {User} from "../../../model/user";
import {Problem} from "../../../model/problem";
import {Error} from "../../../model/error";
import {RoleService} from "../../../service/role.service";
import {Role} from "../../../model/role";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: Array<User>;
  roles!: Role[];

  userName!: string;
  roleId!: number;
  selectedUserId!: number;

  closeUserList: boolean = false;
  closeCreateList: boolean = false;
  seeSuccess: boolean = false;
  seeProblem: boolean = false;
  closeUpdateList: boolean = false;

  success!: User;
  problem!: Problem;

  constructor(private userService: UsersService, private roleService: RoleService) {
  }

  ngOnInit(): void {
    this.loadRoles();
    this.loadUsers();
  }

  clickLoad() {
    this.closeUserList = !this.closeUserList;
    this.closeCreateList = false;
    this.closeUpdateList = false;
    if (this.closeUserList) {
      this.loadUsers()
    }
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  loadRoles() {
    this.roleService.getRoles().subscribe(roles => {
      this.roles = roles;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();
    this.reloadUsers();
  }

  openCreateUserTable() {
    this.closeUserList = false;
    this.closeUpdateList = false;
    this.closeCreateList = !this.closeCreateList;
  }

  openUpdateUserTable() {
    this.closeUserList = false;
    this.closeCreateList = false;
    this.closeUpdateList = !this.closeUpdateList;
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

  updateUser() {
    this.userService.putUser(this.userName, this.roleId, this.selectedUserId).subscribe(
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
