import { Ingredient } from "src/app/shared/ingredient.model";

export class Recipe {
  public name: string;
  public decription: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, path: string, ingArr: Ingredient[]) {
    this.name = name;
    this.decription = desc;
    this.imagePath = path;
    this.ingredients = ingArr;
  }
}