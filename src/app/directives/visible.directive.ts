import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appVisible]'
})
export class AppVisibleDirective {

  allreadyEmited = false;
  @Output()
  inView: EventEmitter<void>;

  @HostBinding('class.active') class = false;

  @HostListener('window:scroll')
  onScroll() {
    if (this.elem.nativeElement.getBoundingClientRect().top < 150) {
      this.class = true;
    } else {
      this.class = false;
    }
    if (!this.isVisible() && this.allreadyEmited) {
      this.allreadyEmited = false;
    }
    if (this.isVisible() && !this.allreadyEmited) {
      this.allreadyEmited = true;
      this.inView.emit();
    }
  }

  constructor(private elem: ElementRef) {
    this.inView = new EventEmitter<void>();
  }

  isVisible() {
    return this.elem.nativeElement.getBoundingClientRect().top > 0 && this.elem.nativeElement.getBoundingClientRect().top < window.innerHeight;
  }

}
