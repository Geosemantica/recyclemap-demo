import { Component, Input } from '@angular/core';
import { PointProgress } from "@app/shared/api/points/models";
import { RcBadgeComponentScope } from "@app/shared/modules/ui-kit/badge/badge.component";

export namespace RcBadgeGroupComponentScope {
  export type BadgeDirection = 'row-list' | 'colum-list';
}

@Component({
  selector: 'rc-badge-group',
  templateUrl: './badge-group.component.html',
  styleUrls: ['./badge-group.component.scss']
})
export class BadgeGroupComponent {
  @Input()
  public direction: RcBadgeGroupComponentScope.BadgeDirection = 'row-list';

  @Input()
  public badgeSize: RcBadgeComponentScope.BadgeSize = 'xs';

  @Input()
  public myEdits: boolean;

  @Input()
  public myPoint: boolean;

  @Input()
  public inProgress: PointProgress;

  @Input()
  public needMod: boolean;

  @Input()
  public myAoR: boolean;

  @Input()
  public missMod: boolean;

  @Input()
  public moderatorMod = false;

  @Input()
  public popUpMode = false;

  public get classList(): string {
    return `${this.direction}`
  }
}
