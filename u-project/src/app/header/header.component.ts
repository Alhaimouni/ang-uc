import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  isAuthenticated: boolean = false;
  user: Subscription;
  constructor(private dataStorage: DataStorageService, private authService: AuthService, private router: Router) { };

  ngOnInit() {
    this.user = this.authService.userData.subscribe(userData => {
      if (userData) {
        console.log('authintecating....');
        this.isAuthenticated = true;
        this.router.navigate(['/recipes']);
      };
    });
  };

  saveData() {
    this.dataStorage.storeRecipes();
  };

  logOut() {
    this.isAuthenticated = false;
    this.authService.logOut();
  };

  getAllData() {
    this.isLoading = true;
    this.dataStorage.fetchRecipes().subscribe(data => {
      this.isLoading = false;
    });
  };

  ngOnDestroy() {
    this.user.unsubscribe();
  };
}
