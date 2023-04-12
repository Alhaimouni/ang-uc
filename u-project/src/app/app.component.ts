import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'u-project';
  recipe: boolean = true;
  list: boolean = false;

  showRecipe() {
    if (this.recipe) {
      this.list = false;
      return;
    } else {
      this.recipe = true;
      this.list = false;
      return;
    }
  }

  showList() {
    if (this.list) {
      this.recipe = false;
      return;
    } else {
      this.list = true;
      this.recipe = false;
      return;
    }
  }
}
