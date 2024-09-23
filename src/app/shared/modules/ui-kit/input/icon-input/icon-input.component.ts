import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { AbstractFormControl } from '@app/shared/modules/cdk/form-control/abstract-form-control.directive';
import { RcInputComponent } from "@app/shared/modules/ui-kit/input/input.component";

@Component({
  selector: 'rc-icon-input',
  templateUrl: './icon-input.component.html',
  styleUrls: ['./icon-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AbstractFormControl.provider(RcIconInputComponent)],
})
export class RcIconInputComponent extends AbstractFormControl<string> {
  @Input()
  public iconName = '';

  @Input()
  public placeholder = '';

  @Input()
  public value = '';

  @Input()
  public disabled = false;

  @ViewChild('inputRef')
  private readonly inputRef: RcInputComponent;

  public get hasError(): boolean {
    return !!this.formErrors;
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public onChange(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }

  public focus(): void {
    this.inputRef.focus();
  }

  public blur(): void {
    this.inputRef.blur();
  }

  public onFocus(): void {
    this.controlFocus.emit();
  }

  public onBlur(): void {
    this.controlBlur.emit();
    this.controlTouched.emit();
  }
}
