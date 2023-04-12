import { Component } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  recipeDetails: Recipe;

  sendDataToDetails(recipe) {
    this.recipeDetails = recipe;
  }

}
