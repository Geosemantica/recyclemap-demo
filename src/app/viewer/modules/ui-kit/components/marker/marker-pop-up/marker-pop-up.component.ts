import { Component, Input } from '@angular/core';
import { Fraction, UserRole } from '@app/shared/api/points/models';
import { HelperService } from '@app/shared/services/helper.service';

@Component({
  selector: 'rc-marker-pop-up',
  templateUrl: './marker-pop-up.component.html',
  styleUrls: ['./marker-pop-up.component.scss'],
})
export class RcMarkerPopUpComponent {
  @Input()
  public userRole: UserRole;

  @Input()
  public fractions!: Fraction[];

  @Input()
  public title!: string;

  @Input()
  public total: number;

  @Input()
  public missMod: boolean;

  @Input()
  public needMod: boolean;

  @Input()
  public myAoR: boolean;

  constructor(
    private readonly helperService: HelperService
  ) {
  }

  public fractionIconName(fraction: Fraction): string {
    return this.helperService.fractionIconName(fraction);
  }

  protected readonly UserRole = UserRole;
}
