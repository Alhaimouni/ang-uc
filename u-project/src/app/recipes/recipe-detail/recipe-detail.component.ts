import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  @Input() recipe;

  constructor(private shoppingService: ShoppingListService) { }
  addToShoppingList(recipeIngredient) {
    this.shoppingService.addIngsFromList(recipeIngredient);
  }
}
