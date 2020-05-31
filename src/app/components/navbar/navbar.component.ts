import { Component, OnInit } from '@angular/core';
import { Auth1Service } from 'src/app/services/auth1.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean;

  constructor(private Auth1: Auth1Service,
    private router: Router,
    private Token: TokenService
  ) { }

  ngOnInit() {
    this.Auth1.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(Event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth1.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
