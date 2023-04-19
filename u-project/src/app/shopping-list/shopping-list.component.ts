import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients = this.sService.ingredients;
  constructor(private sService: ShoppingListService) {
  }
  ngOnInit() {
    this.sService.sendNew.subscribe(data => {
      this.ingredients = data;
    })
  }
}
