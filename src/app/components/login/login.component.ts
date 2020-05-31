import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { Auth1Service } from '../../services/auth1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;
  constructor(
    private Auth: AuthService,
    private Token: TokenService,
    private router: Router,
    private Auth1: Auth1Service
  ) { }

  onSubmit() {
    this.Auth.login(this.form).subscribe(
      data => this.handelResponce(data),
      error => this.handleError(error)
    );
  }

  handelResponce(data){
    this.Token.handle(data.access_token);
    this.Auth1.changeAuthStatus(true);
    this.router.navigateByUrl('/home');
  }

  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit() {
  }

}
