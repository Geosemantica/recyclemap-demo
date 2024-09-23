import { Component, Input } from '@angular/core';
import { Fraction } from '@app-shared/api/points/models';
import { HelperService } from '@app/shared/services/helper.service';

@Component({
  selector: 'rc-fractions-list',
  templateUrl: './fractions.component.html',
  styleUrls: ['./fractions.component.scss'],
})
export class RcFractionsListComponent {

  @Input()
  public fractions!: Fraction[];

  constructor(
    private readonly helperService: HelperService
  ) {
  }

  public fractionIconName(fraction: Fraction): string {
    return this.helperService.fractionIconName(fraction)
  }
}
