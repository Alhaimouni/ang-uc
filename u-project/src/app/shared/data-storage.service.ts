import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://uc-project-f919f-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(data => {
      console.log(data);
    });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://uc-project-f919f-default-rtdb.firebaseio.com/recipes.json')
      .pipe(map(recipes => {
        return recipes.map(item => {
          return { ...item, ingredients: item.ingredients ? item.ingredients : [] }
        })
      }), tap(data => {
        this.recipeService.fetchAll(data);
      }));
  }
}