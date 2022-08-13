import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ContentComponent {

  // off for now because we dont load anything for now
  loading = false;
  goUp = false;

  constructor(private _router: Router, private utilsService: UtilsService) { }

  @HostListener('document:scroll')
  scroll() {
    this.goUp = window.pageYOffset > 800 ? true : false
  }

  justGoUp() {
    this._router.navigate(['/'], { fragment: 'intro' });
    // this.utilsService.scrollToAnchor('intro');
  }

}
