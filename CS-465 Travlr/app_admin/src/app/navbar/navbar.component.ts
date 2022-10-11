import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService
    ) { }

    ngOnInit() { }
    public isLoggedIn(): boolean {
      return this.authenticationService.isLoggedIn();
    }

    private onLogout(): void {
      return this.authenticationService.logout();
    }
}
