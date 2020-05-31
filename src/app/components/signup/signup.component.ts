import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirm: null
  };

  public error = [];
  constructor(private Auth: AuthService, private router: Router) { }

  onSubmit() {
    this.Auth.signup(this.form).subscribe(
      data => this.handelResponce(data),
      error => this.handleError(error)
    );
  }

  handelResponce(data){
    this.router.navigateByUrl('/login');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
