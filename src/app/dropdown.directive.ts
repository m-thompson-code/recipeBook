import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') get opened() {
    //the class open will only be binded if true
    return this.isOpen;
    // Note that bootstrap has a lot of styling already prepared
    // its css handles the dropdown effect (we are just making it happen in our own way)
  }
  //mouseover mouseleave
  @HostListener('click') open() {
    this.isOpen = true;
  }
  @HostListener('mouseover') open2() {
    this.isOpen = true;
  }
  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }
  private isOpen = false;
}
