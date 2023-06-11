import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponse, AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  closeAlert() {
    this.err = null;
  }
  constructor(private authService: AuthService) { }
  isLoggin: boolean = true;
  loading: boolean = false;
  err = null;
  authObs: Observable<AuthResponse>;

  onSubmit(form: NgForm) {
    const { email, password } = form.value;
    this.loading = true;
    if (this.isLoggin) {
      this.authObs = this.authService.signIn(email, password);
    } else {
      this.authObs = this.authService.signUp(email, password);
    }

    this.authObs.subscribe(data => {
      this.loading = false;
    }, error => {
      this.err = error;
      this.loading = false;
    })
    form.reset();
  }
  switchState(): void {
    this.isLoggin = !this.isLoggin;
  }
}
