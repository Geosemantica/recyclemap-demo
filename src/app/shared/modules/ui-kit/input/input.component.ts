import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
import { AbstractFormControl } from '@app/shared/modules/cdk/form-control/abstract-form-control.directive';
import { HelperService } from '@app/shared/services/helper.service';

export namespace RcInputComponentScope {
  export type InputType = 'text' | 'password' | 'time' | 'number';
  export type InputHeight = 'medium' | 'large';
  export type PlaceholderWeight = 'regular-weight' | 'medium-weight';
  export type Theme = 'primary' | 'primary-left-radius-only' | 'primary-grey';
}
@Component({
  selector: 'rc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AbstractFormControl.provider(RcInputComponent)]
})
export class RcInputComponent extends AbstractFormControl<string> implements AfterViewInit {
  @Input()
  public size: RcInputComponentScope.InputHeight = 'medium';

  @Input()
  public type: RcInputComponentScope.InputType = 'text';

  @Input()
  public theme: RcInputComponentScope.Theme = 'primary';

  @Input()
  public prefix: TemplateRef<any> | null = null;

  @Input()
  public postfix: TemplateRef<any> | null = null;

  @Input()
  public placeholder = '';

  @Input()
  public error = false;

  @Input()
  public disabled = false;

  @Input()
  public value = '';

  @Input()
  public readonly = false;

  @Input()
  public isDropdown = false;

  @Input()
  public placeholderWeight: RcInputComponentScope.PlaceholderWeight = 'medium-weight';

  @Input()
  public autocomplete: string | null = null;

  public readonly greyIcon = this.helperService.readScssProperty('--neutrals-grey-400');

  @ViewChild('input')
  private input!: ElementRef<HTMLInputElement>;

  constructor(
    private readonly helperService: HelperService,
  ) {
    super();
  }

  public get classList(): string {
    return (
      `${this.hasError ? 'error' : ''} ${this.size} ${this.theme}` +
      ` ${this.placeholderWeight}
      + ${this.postfix && this.value ? 'big-padding-right' : ''}` +
      ` ${this.prefix ? 'big-padding-left' : ''}` +
      ` ${this.disabled ? 'disabled' : ''}` +
      ` ${this.isDropdown && !this.disabled ? 'dropdown' : ''}`
    );
  }

  public get hasError(): boolean {
    return this.error || !!this.formErrors;
  }

  public ngAfterViewInit(): void {
    if (this.type === 'number') {
      this.input.nativeElement.setAttribute('inputmode', 'numeric');
    }
  }

  public focus(): void {
    if (this.disabled) {
      return;
    }

    this.input.nativeElement.focus();
  }

  public blur(): void {
    this.input.nativeElement.blur();
  }

  public onInput(event: Event): void {
    this.value = (event.target as HTMLInputElement).value || '';
    this.valueChange.emit(this.value);
  }

  public onFocus(): void {
    this.controlFocus.emit();
  }

  public onBlur(): void {
    this.controlBlur.emit();
    this.controlTouched.emit();
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
