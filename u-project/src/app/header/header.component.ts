import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() selectRecipe = new EventEmitter();
  @Output() selectList = new EventEmitter();

  sList(){
    this.selectList.emit();
  }
  sRecipe(){
    this.selectRecipe.emit();
  }
}
