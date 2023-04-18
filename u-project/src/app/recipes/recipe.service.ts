import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Test One', 'No Descriptions for now', 'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Spicy-chicken-and-chickpea-curry-40f3492.jpg'),
    new Recipe('Test Two', 'No Descriptions for now', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipe() {
    return this.recipes.slice();
  }

  constructor() {}
}
