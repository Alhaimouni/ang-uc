import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      this.id = +p['id'];
      this.editMode = this.id || this.id === 0 ? true : false;
      console.log(this.id, this.editMode);
    })
  }
}
