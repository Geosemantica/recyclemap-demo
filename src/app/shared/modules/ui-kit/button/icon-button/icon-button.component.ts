import { Component, Input } from '@angular/core';
import { IconSize } from '@app/shared/modules/ui-kit/button/button.models';
import Size = RcIconButtonComponentScope.Size;

export namespace RcIconButtonComponentScope {
  export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  export type Theme = 'default' | 'primary' | 'secondary' | 'error' | 'no-border' | 'blue' | 'primary-accent' | 'scroll';
  export type Size = 'sm' | 'md' | 'lg';
}

@Component({
  selector: 'rc-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class RcIconButtonComponent {
  @Input()
  public size: Size = 'lg';

  @Input()
  public icon!: string;

  @Input()
  public color: string | null = null;

  @Input()
  public title: string;

  @Input()
  public iconTitle: string = '';

  @Input()
  public iconSize: IconSize = 'md';

  @Input()
  public theme: RcIconButtonComponentScope.Theme = 'default';

  @Input()
  public disabled = false;

  public get classList(): string {
    return (
      `${this.title && this.theme !== 'no-border' ? 'txt-icon-btn' : 'simple-icon-btn'}` +
      ` ${this.theme}` +
      ` ${this.disabled ? 'disabled' : ''}` +
      ` ${this.size}`
    );
  }
}
