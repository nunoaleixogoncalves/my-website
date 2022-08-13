import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {

  @HostBinding('class.active') class = false;

  @HostListener('document:scroll')
  onScroll() {
    if (this.elem.nativeElement.getBoundingClientRect().top < 100) {
      this.class = true;
    } else {
      this.class = false;
    }
  }
  constructor(private elem: ElementRef) { }

}
