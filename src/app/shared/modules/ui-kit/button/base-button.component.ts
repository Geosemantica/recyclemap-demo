import { Directive, Input } from '@angular/core';
import { IconSize, Theme } from '@app/shared/modules/ui-kit/button/button.models';

@Directive()
export abstract class BaseButtonComponent {
  @Input()
  public prefixIcon: string | null = null;

  @Input()
  public postfixIcon: string | null = null;

  @Input()
  public theme: Theme = 'primary';

  public iconSize: IconSize = 'sm';

  public iconColor: string;

  get classList(): string {
    return this.theme;
  }

  public ngOnInit(): void {
    this.setIconColor();
    this.setIconSize();
  }

  protected abstract setIconColor(): void;
  protected abstract setIconSize(): void;
}
