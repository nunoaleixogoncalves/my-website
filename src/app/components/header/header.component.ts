import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  distance = 0;
  menuOpen = false;
  fragment: string | null = 'intro';
  lang: string = '';
  onTranslationChangeSubs!: Subscription;

  @HostListener('window:scroll')
  onScroll() {
    this.distance = window.pageYOffset;
  }

  constructor(private route: ActivatedRoute, private translate: TranslateService) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
      this.menuOpen = false;
    });

    this.lang = this.translate.currentLang;
    this.onTranslationChangeSubs = this.translate.onLangChange.subscribe((translation: LangChangeEvent) => {
      this.lang = translation.lang;
    })
  }

  ngOnDestroy(): void {
    this.onTranslationChangeSubs.unsubscribe();
  }

  setLanguage(language: string) {
    this.translate.use(language);
  }

  openCloseMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
