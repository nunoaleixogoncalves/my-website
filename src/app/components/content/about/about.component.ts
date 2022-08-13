import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  translateParam = {};
  yearsWork = 0;
  yearsOld = 0;

  constructor() { }

  ngOnInit(): void {
    this.yearsWork = new Date().getFullYear() - 2016;
    this.yearsOld = new Date().getFullYear() - 1990;

    this.translateParam = { yearsWork: this.yearsWork, yearsOld: this.yearsOld }
  }

  inview() {
    console.log('view');
  }

}
