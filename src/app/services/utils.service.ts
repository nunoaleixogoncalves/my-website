import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor(private viewportScroller: ViewportScroller) { }

  scrollToAnchor(anchor: string) {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
