import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoggedUser, User } from "./user.model";
import { catchError, tap } from "rxjs/operators";
import { BehaviorSubject, throwError } from "rxjs";
import { Router } from "@angular/router";

export interface AuthResponse {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean;
};

@Injectable({ providedIn: 'root' })
export class AuthService {


  userData = new BehaviorSubject<LoggedUser>(null);
  timer: any = null;

  constructor(private http: HttpClient, private router: Router) { }

  private errorHandler(errorResp: HttpErrorResponse) {
    let errorMessage = 'An errooooooor';
    if (!errorResp.error || !errorResp.error.error) {
      return throwError(errorMessage)
    }
    switch (errorResp.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email is taken';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invaild Email or Password';
        break;
      default:
        errorMessage = ' Default Error Message'
    }
    return throwError(errorMessage);
  };

  private handelAuth = (response) => {
    let { email, idToken, localId, expiresIn } = response;
    let expDate = new Date(new Date().getTime() + +expiresIn * 1000);
    let user = new LoggedUser(email, localId, idToken, expDate);
    this.userData.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
    this.autoLogOut(expiresIn);
  }

  signUp(mail: string, pass: string) {
    return this.http.post<AuthResponse>
      ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDcnI9szRFUTC9A40LZEIEkXKIG_rgDruE',
        new User(mail, pass, true))
      .pipe(catchError(this.errorHandler), tap(this.handelAuth));
  };

  signIn(mail: string, pass: string) {
    console.log('signin service', mail, pass)
    return this.http.post<AuthResponse>
      ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDcnI9szRFUTC9A40LZEIEkXKIG_rgDruE',
        new User(mail, pass, true))
      .pipe(catchError(this.errorHandler), tap(this.handelAuth));
  };

  logOut() {
    this.userData.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    clearTimeout(this.timer);
  }

  autoLogOut(duration: number) {
    this.timer = setTimeout(() => {
      this.logOut()
    }, duration);
  }

  autoLogin() {
    if (localStorage.getItem('userData')) {
      const { email, id, _token, _tokenExpirationDate } = JSON.parse(localStorage.getItem('userData'));
      const logged = new LoggedUser(email, id, _token, new Date(_tokenExpirationDate));
      if (!id) {
        return;
      }
      if (logged.token) {
        const expDuration = new Date(_tokenExpirationDate).getTime() - new Date().getTime();
        this.autoLogOut(expDuration);
        this.userData.next(logged);
      }
    } else {
      console.log('app is empty');
    }
  }
}



