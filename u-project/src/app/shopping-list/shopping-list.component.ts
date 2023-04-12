import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Onion', 2),
  ];

  addOne(payload: { name: 'string', amount: number }) {
    this.ingredients = [...this.ingredients, new Ingredient(payload.name, payload.amount)]
  }
}
