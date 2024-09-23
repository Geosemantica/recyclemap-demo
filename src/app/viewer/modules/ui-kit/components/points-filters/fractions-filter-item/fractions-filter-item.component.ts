import { Component, Input } from '@angular/core';
import { FractionFullInfo } from '@app/shared/api/fractions/models';
import { HelperService } from '@app/shared/services/helper.service';

@Component({
  selector: 'rc-fractions-filter-item',
  templateUrl: './fractions-filter-item.component.html',
  styleUrls: ['./fractions-filter-item.component.scss'],
})
export class RcFractionsFilterItemComponent {
  public readonly greyIcon = this.helperService.readScssProperty('--neutrals-grey-400');
  public readonly whiteIcon = this.helperService.readScssProperty('--neutrals-white');
  public readonly greyBackground = this.helperService.readScssProperty('--neutrals-grey-100');
  public readonly greyText = this.helperService.readScssProperty('--neutrals-grey-500');

  @Input()
  public isActive = false;

  @Input()
  public filterItem!: FractionFullInfo;

  constructor(
    public readonly helperService: HelperService,
  ) {
  }

  public get getIconByName(): string {
    return this.filterItem.icon.split('.')[0];
  }
}
