import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput;
  @ViewChild('amountInput', { static: true }) amountInput;
  @Output() addToList = new EventEmitter();

  ngOnInit() {
    // console.log(this.nameInput.nativeElement);
    // console.log(this.amountInput.nativeElement);
  }

  addIngreient(e) {
    console.log(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.addToList.emit({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value
    });
    e.target.reset();
  }
}
