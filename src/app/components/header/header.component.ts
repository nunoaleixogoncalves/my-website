import { Component, HostListener, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  distance = 0;
  fragment: string | null = 'intro';
  lang: string = '';
  onTranslationChangeSubs!: Subscription;

  @HostListener('window:scroll')
  doSomething() {
    this.distance = window.pageYOffset;
  }

  constructor(private router: Router, private translate: TranslateService) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof ActivationEnd)).subscribe((event: any) => {
      this.fragment = event.snapshot.fragment;
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

}
