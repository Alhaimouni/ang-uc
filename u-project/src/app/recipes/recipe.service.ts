import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Test One', 'No Descriptions for now', 'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Spicy-chicken-and-chickpea-curry-40f3492.jpg', [new Ingredient('meat', 1), new Ingredient('soap', 2)]),
    new Recipe('Test Two', 'No Descriptions for now', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505', [new Ingredient('tomato', 10)]),
  ];
  recipeSelected = new EventEmitter<Recipe>();
  getRecipe() {
    return this.recipes.slice();
  }
  getRecipeByIndex(index: number) {
    return this.recipes[index];
  }
  constructor() { }
}
