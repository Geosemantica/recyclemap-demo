import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IconSize } from '@app/shared/modules/ui-kit/button/button.models';
import { HelperService } from '@app/shared/services/helper.service';
import { AbstractFormControl } from '@app/shared/modules/cdk/form-control/abstract-form-control.directive';

export namespace RcSelectButtonComponentScope {
  export type Theme = 'primary' | 'secondary' | 'no-style';
}

@Component({
  selector: 'rc-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AbstractFormControl.provider(RcSelectButtonComponent)]
})
export class RcSelectButtonComponent extends AbstractFormControl<boolean> {
  _value: boolean = false;
  get value() {
    return this._value;
  }
  @Input()
  set value(val) {
    this._value = val;
  }

  @Input()
  public prefixIcon: string | null = null;

  @Input()
  public iconSize: IconSize = 'sm';

  @Input()
  public disabled = false;

  public iconColor: string;

  _theme: RcSelectButtonComponentScope.Theme = 'primary';
  get theme() {
    return this._theme;
  }

  @Input()
  set theme(val) {
    this._theme = val;
  }
  constructor(private readonly helperService: HelperService) {
    super();
  }

  public get classList(): string {
    return `${this.theme} ${this.value ? 'selected' : ''}`;
  }

  public writeValue(value: boolean): void {
    this.value = value;
  }

  public setDisabledState(isDisabled: boolean): void {}

  public onSelect(): void {
    if (this.disabled) {
      return;
    }
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }
}
