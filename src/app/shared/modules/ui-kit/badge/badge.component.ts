import { Component, Input } from '@angular/core';

export namespace RcBadgeComponentScope {
  export type BadgeTheme = 'primary' | 'secondary-warning' | 'secondary-green' | 'secondary-error';
  export type BadgeSize = 'xxs' | 'xs' ;
}

@Component({
  selector: 'rc-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class RcBadgeComponent {

  @Input()
  public theme: RcBadgeComponentScope.BadgeTheme = 'primary';

  @Input()
  public size: RcBadgeComponentScope.BadgeSize = 'xs';

  @Input()
  public badgeText: string;

  @Input()
  public badgeIcon: string;

  public get classList(): string {
    return `${this.theme} ${this.size}`
  }
}
