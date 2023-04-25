import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe-list/recipe.model';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id;
  constructor(private shoppingService: ShoppingListService, private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  addToShoppingList(recipeIngredient) {
    this.shoppingService.addIngsFromList(recipeIngredient);
  }

  ngOnInit() {
    let index = +this.activatedRoute.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipeByIndex(index);
    this.activatedRoute.params.subscribe(p => {
      let index = +p['id'];
      this.id = p['id'];
      this.recipe = this.recipeService.getRecipeByIndex(index);
    })
  }

  onEditRecipe() {
    // this.router.navigate(['edit'], { relativeTo: this.activatedRoute }); 
    // this.router.navigate(['/recipes', this.id, 'edit']);
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.activatedRoute });
  };
}
