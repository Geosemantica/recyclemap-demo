import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { commonIcons } from '@app/svg/common';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TranslateLoader, TranslateModule, TranslateParser, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GalleryModule } from 'ng-gallery';
import { LIGHTBOX_CONFIG, LightboxModule } from 'ng-gallery/lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateICUParser } from 'ngx-translate-parser-plural-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RcUserAvatarModule } from './shared/modules/ui-kit/user-avatar/user-avatar.module';
import { RcUiKitModule } from './shared/modules/ui-kit/ui-kit.module';
import { fractionsIcons } from '@app/svg/fractions';
import { HeaderComponent } from "@app/viewer/components/header/header.component";
import { ViewerModule } from "@app/viewer/viewer.module";
import { LANGUAGES } from "@app/app.models";

function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(
    http,
    './assets/i18n/',
    '.json?cb=' + new Date().getTime()
  );
}

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    ViewerModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RcUserAvatarModule,
    TranslateModule,
    RcUiKitModule,
    SvgIconsModule.forRoot({
      icons: [...commonIcons, ...fractionsIcons],
      sizes: {
        xxs: '12px',
        xs: '14px',
        sm: '16px',
        md: '20px',
        lg: '24px',
        xl: '32px',
        xxl: '36px',
      },
    }),
    TranslateModule.forRoot({
      parser: {
        provide: TranslateParser,
        useClass: TranslateICUParser,
      },
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: LANGUAGES.RU,
    }),
    GalleryModule.withConfig({
      counterPosition: 'bottom',
      thumb: false,
    }),
    LightboxModule,
  ],
  providers: [
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        keyboardShortcuts: false,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private translateService: TranslateService,
  ) {
    this.translateService.use(LANGUAGES.RU);
    this.translateService.setDefaultLang(LANGUAGES.RU);
  }
}
