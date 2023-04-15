import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen:boolean=false;

  constructor() {
  }

  @HostListener('click') openOrClose() {
    this.isOpen = !this.isOpen;
  }
}

// export class DropdownDirective {

//   isOpen: boolean = false;

//   constructor(private elmRef: ElementRef, private rend: Renderer2) {
//   }
  
//   @HostListener('click') openOrClose() {
//     if (!this.isOpen) {
//       this.rend.addClass(this.elmRef.nativeElement, 'open');
//       this.isOpen = true;
//     } else {
//       this.rend.removeClass(this.elmRef.nativeElement, 'open');
//       this.isOpen = false;
//     }
//   }
// }