import { Pipe, PipeTransform } from '@angular/core';
import { LANGUAGES } from '@app/app.models';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'rcDate'
})
export class RcDatePipe implements PipeTransform {

  constructor(
    private translateService: TranslateService,
  ) {
  }

  public transform(timestamp: string): string {
    if (this.translateService.currentLang === LANGUAGES.RU) {
      const dateToStringOptions: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };

      return new Date(timestamp).toLocaleDateString(LANGUAGES.RU, dateToStringOptions).replace(' г.', '');
    }

    return new Date(timestamp).toLocaleDateString();
  }
}
