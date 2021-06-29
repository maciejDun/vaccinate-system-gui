import {Component, OnInit} from '@angular/core';
import {UsersService} from "../service/users.service";
import {User} from "../model/user";
import {Roles} from "../model/roles";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  currentUser!: User;

  userPanel: boolean = false;
  adminPanel: boolean = false;

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.loadCurrentUser();
    setTimeout(() => this.choosePanel(), 200);
  }

  showUserPanel() {
    this.userPanel = true;
    this.adminPanel = false;
  }

  showAdminPanel() {
    this.userPanel = false;
    this.adminPanel = true;
  }

  private isAdmin(): boolean {
    let roles = this.currentUser.roles;
    for (let role of roles) {
      if (role.roles == Roles.ROLE_ADMIN) return true;
    }
    return false;
  }

  private choosePanel() {
    if (this.isAdmin()) {
      this.showAdminPanel();
    } else {
      this.showUserPanel();
    }
  }

  loadCurrentUser() {
    this.userService.loadCurrentUser().subscribe((data: any) => {
      this.currentUser = data;
    })
  }
}
