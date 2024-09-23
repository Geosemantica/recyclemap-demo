import {
  Directive,
  EventEmitter,
  forwardRef,
  Output,
  Provider,
} from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { SubscriberComponent } from '@app/shared/modules/cdk/subscriber-component';

/**
 * base control for each custom input component that supposed to be controlled by angular reactive forms
 */
@Directive()
export abstract class AbstractFormControl<V> extends SubscriberComponent {
  public static provider(forClass: any): Provider {
    return {
      provide: AbstractFormControl,
      useExisting: forwardRef(() => forClass),
    };
  }

  @Output()
  public readonly controlFocus = new EventEmitter<void>();

  @Output()
  public readonly controlBlur = new EventEmitter<void>();

  @Output()
  public readonly valueChange = new EventEmitter<V>();

  @Output()
  public readonly controlTouched = new EventEmitter<void>();

  private ngFormErrors: ValidationErrors | null = null;

  public get formErrors(): ValidationErrors | null {
    return this.ngFormErrors;
  }

  public setFormErrors(errors: ValidationErrors | null): void {
    this.ngFormErrors = errors;
  }

  public abstract writeValue(value: V): void;

  public abstract setDisabledState(isDisabled: boolean): void;
}
