import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }
  sendNew = new EventEmitter<Ingredient[]>;

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Onion', 2),
  ];

  addOnList(payload) {
    this.ingredients = [...this.ingredients, new Ingredient(payload.name, payload.amount)];
    this.sendNew.emit(this.ingredients);
  }

  addIngsFromList(arr: Ingredient[]) {
    this.ingredients = [...this.ingredients, ...arr];
    this.sendNew.emit(this.ingredients);
  }
}
