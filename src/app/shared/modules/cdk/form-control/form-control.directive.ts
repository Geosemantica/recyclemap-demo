import {
  ChangeDetectorRef,
  Directive,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { AbstractFormControl } from '@app/shared/modules/cdk/form-control/abstract-form-control.directive';
import { SubscriberComponent } from '@app/shared/modules/cdk/subscriber-component';
import { debounceTime } from 'rxjs';

/**
 * use this directive on each custom input component for bind it with angular reactive forms
 */
@Directive({
  selector: '[rcFormControl]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormControlDirective),
      multi: true,
    },
  ],
})
export class FormControlDirective<V> extends SubscriberComponent implements OnInit, ControlValueAccessor {
  @Input()
  public formControlName: string | null = null;

  @Input()
  public formControl: AbstractControl | null = null;

  @Output()
  public disabledChanges = new EventEmitter<boolean>();
  // Optional injection for cases then control has only formControl instead of formControlName input
  constructor(
    private changeDetector: ChangeDetectorRef,
    @Optional()
    private component: AbstractFormControl<V>,
    @Optional()
    private controlContainer: ControlContainer,
  ) {
    super();
  }

  public ngOnInit(): void {
    if (this.formControlName && this.controlContainer && this.controlContainer.control) {
      this.formControl = this.controlContainer.control.get(this.formControlName);
    }

    // throw an error if control name is invalid
    if (!this.formControl) {
      throw new Error(
        `
          Can't find form control in form control container.
          Wrong formControlName: ${this.formControlName}.
        `,
      );
    }

    // updating error state on form control status changes
    this.subscribe(this.formControl.statusChanges, this.updateErrorState);
  }

  /**
   * emit value from form control to custom form control
   * @param value
   */
  public writeValue(value: V): void {
    this.component.writeValue(value);
    this.changeDetector.markForCheck();
  }

  /**
   * set disable state to custom form control
   * @param isDisabled
   */
  public setDisabledState(isDisabled: boolean): void {
    this.component.setDisabledState(isDisabled);
    this.disabledChanges.emit(isDisabled);
    this.changeDetector.markForCheck();
  }

  /**
   * listen for custom form control value changes and emitting changes to form control
   * @param fn
   */
  public registerOnChange(fn: (_: V) => void): void {
    this.subscribe(this.component.valueChange, (value: V) => {
      fn(value);
      this.updateErrorState();
    });
  }

  /**
   * listen for custom form control value changes and emitting changes to form control to mark control as touched
   * @param fn
   */
  public registerOnTouched(fn: () => void): void {
    // We need to debounce because onClick run after touch and blur events
    this.subscribe(this.component.controlTouched.pipe(debounceTime(100)), () => {
      fn();
      this.updateErrorState();
    });
  }

  /**
   * update error state and set errors to custom form control
   * @private
   */
  private updateErrorState(): void {
    this.component.setFormErrors(
      (
        this.formControl &&
        this.formControl.touched &&
        !this.formControl.valid &&
        this.formControl.errors
      ) || null,
    );
    this.changeDetector.markForCheck();
  }
}
