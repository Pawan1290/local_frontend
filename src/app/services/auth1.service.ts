import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class Auth1Service {

  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  constructor(private Token: TokenService) { }
}
