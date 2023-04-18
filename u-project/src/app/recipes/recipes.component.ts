import { Component, DoCheck, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  constructor(private recipeService: RecipeService) {
  }
  recipeDetails: Recipe;
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe) => {
      this.recipeDetails = recipe;
    });
  }
}
