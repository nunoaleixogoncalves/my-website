import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AboutComponent } from './components/content/about/about.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { ContentComponent } from './components/content/content.component';
import { IntroComponent } from './components/content/intro/intro.component';
import { LoadingComponent } from './components/content/loading/loading.component';
import { SkillsComponent } from './components/content/skills/skills.component';
import { SocialsComponent } from './components/content/socials/socials.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AppVisibleDirective } from './directives/visible.directive';
import { ContactService } from './services/contact.service';
import { UtilsService } from './services/utils.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    IntroComponent,
    SocialsComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    LoadingComponent,
    AppVisibleDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en'
    })
  ],
  providers: [
    ContactService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}