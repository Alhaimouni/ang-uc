import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test One', 'No Descriptions for now', 'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Spicy-chicken-and-chickpea-curry-40f3492.jpg'),
    new Recipe('Test Two', 'No Descriptions for now', 'https://assets.epicurious.com/photos/5a3002b504847a34b821cb4a/1:1/w_2560%2Cc_limit/seared-scallops-with-brown-butter-and-lemon-pan-sauce-recipe-BA-121217.jpg'),
    new Recipe('Test Two', 'No Descriptions for now', 'https://assets.epicurious.com/photos/5a3002b504847a34b821cb4a/1:1/w_2560%2Cc_limit/seared-scallops-with-brown-butter-and-lemon-pan-sauce-recipe-BA-121217.jpg'),
    new Recipe('Test Two', 'No Descriptions for now', 'https://assets.epicurious.com/photos/5a3002b504847a34b821cb4a/1:1/w_2560%2Cc_limit/seared-scallops-with-brown-butter-and-lemon-pan-sauce-recipe-BA-121217.jpg'),
  ];
}
