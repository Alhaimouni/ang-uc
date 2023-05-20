import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {


  isLoading: boolean = false;
  constructor(private dataStorage: DataStorageService) { }

  ngOnInit() { }

  saveData() {
    this.dataStorage.storeRecipes();
  }

  getAllData() {
    this.dataStorage.fetchRecipes().subscribe(data => {
      console.log(data);
      
    });
  }
}
