import { Component, ContentChild, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],

})
export class AlertComponent {
  @Input() message?: string;
  @Output() callClose = new EventEmitter();

  close() {
    this.callClose.emit();
  }
}