import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'pt']);
    this.translate.use('en');

    // custom console log
    setTimeout(console.log.bind(console, '%cstop the shenanigans!', 'font-size: 200px; color: #FF00FF;'), 0);
  }
}
