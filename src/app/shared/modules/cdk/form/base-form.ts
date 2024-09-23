import { AbstractControl, UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { FormControlErrors } from '@app/shared/modules/cdk/form/form-errors';

/**
 * extend every form with this class to indicate invalid inputs on form submit, get typed form data and to use custom validators
 */
export abstract class RcBaseForm<T> {
  public static recursiveTouch(control: AbstractControl): void {
    if (!control.touched && !control.disabled) {
      control.markAsTouched();
      control.updateValueAndValidity();
    }

    if (control instanceof UntypedFormGroup || control instanceof UntypedFormArray) {
      Object.values(control.controls)
        .forEach(ctrl => this.recursiveTouch(ctrl));
    }
  }

  public abstract readonly formGroup: UntypedFormGroup;
  protected abstract formErrors: FormControlErrors;

  public knownErrorsForControl(path: string | (string | number)[], formArrayControlIndex?: number): string[] {
    return this.formErrors.knownErrorsForControl(path, formArrayControlIndex);
  }

  public submit(): T | null {
    RcBaseForm.recursiveTouch(this.formGroup);

    if (!this.formGroup.valid) {
      return null;
    }

    return this.getFormValue();
  }

  protected abstract getFormValue(): T;
}
