import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {SecurityService} from "../security/security.service";
import {Router} from "@angular/router";
import {UsersService} from "../service/users.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser!: User;

  constructor(private http: HttpClient, private userService: UsersService,
              private securityService: SecurityService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    this.userService.loadCurrentUser().subscribe((data: any) => {
      this.currentUser = data;
    })
  }

  logout() {
    this.securityService.removeToken();
    this.securityService.logout().subscribe();
    this.router.navigate(['/login']);
  }
}
