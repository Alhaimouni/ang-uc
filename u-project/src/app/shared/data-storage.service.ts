import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://uc-project-f919f-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(data => {
      console.log(data);
    });
  }

  fetchRecipes() {
    //   return this.authService.userData.pipe(take(1), exhaustMap(user => {
    //     return this.http.get<Recipe[]>('https://uc-project-f919f-default-rtdb.firebaseio.com/recipes.json', { params: new HttpParams().set('auth', user.token) })
    //   }), map(recipes => {
    //     return recipes.map(item => {
    //       return { ...item, ingredients: item.ingredients ? item.ingredients : [] }
    //     })
    //   }), tap(data => {
    //     this.recipeService.fetchAll(data);
    //   }))
    // }
    return this.http.get<Recipe[]>('https://uc-project-f919f-default-rtdb.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
          })
        }
        ),
        tap(recipes => {
          this.recipeService.fetchAll(recipes);
        })
      )
  }
}
