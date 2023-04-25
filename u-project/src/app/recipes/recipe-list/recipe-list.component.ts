import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }
  showDetails(recipe) {
    this.recipeService.recipeSelected.emit(recipe);
  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }
}
