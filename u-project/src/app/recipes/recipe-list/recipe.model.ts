export class Recipe {
  public name: string;
  public decription: string;
  public imagePath: string;

  constructor(name, desc, path) {
    this.name = name;
    this.decription = desc;
    this.imagePath = path;
  }
}