import { Injectable } from '@angular/core';
import { Fraction } from '@app/shared/api/points/models';
import { FractionType } from '@app/shared/api/fractions/models';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  /**
   * Access to variables from variables.scss
   * @param name: e.g. '--legacy-carrot'
   */
  readScssProperty(name: string) {
    return window.getComputedStyle(document.body).getPropertyValue(name).trim();
  }

  public fractionIconName(fraction: Fraction): string {
    let [fractionIconName] = fraction.icon.split('.');
    const ZWTypePostfix = '-zw';

    if (fraction.type === FractionType.ZW) {
      fractionIconName+=ZWTypePostfix;
    }

    return fractionIconName;
  }
}
