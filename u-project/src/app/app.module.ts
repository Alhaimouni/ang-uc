import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { NotFoundComponent } from './notFound/not-found.component';
import { AppRoutes } from './route.module';
import { RecipeLoadingComponent } from './recipes/recipe-loading/recipe-loading.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    DropdownDirective,
    NotFoundComponent,
    RecipeLoadingComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
