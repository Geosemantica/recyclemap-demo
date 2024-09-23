import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractFormControl } from '@app/shared/modules/cdk/form-control/abstract-form-control.directive';
import {
  RcCheckboxInputComponentScope
} from "../checkbox/checkbox.component";

@Component({
  selector: 'rc-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AbstractFormControl.provider(RcCheckboxInputComponent)],
})
export class RcCheckboxInputComponent extends AbstractFormControl<boolean> {
  @Input()
  public value = false;

  @Input()
  public disabled = false;

  @Input()
  public size: RcCheckboxInputComponentScope.Size = 'medium';

  @Input()
  public theme: RcCheckboxInputComponentScope.Theme = 'secondary';

  constructor() {
    super();
  }

  public get hasError(): boolean {
    return !!this.formErrors;
  }

  public writeValue(value: boolean): void {
    this.value = value;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public onChange(event: Event): void {
    this.value = (event.target as HTMLInputElement).checked;
    this.valueChange.emit(this.value);
  }

  public onFocus(): void {
    this.controlFocus.emit();
  }

  public onBlur(): void {
    this.controlBlur.emit();
    this.controlTouched.emit();
  }
}
