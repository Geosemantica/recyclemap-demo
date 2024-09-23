import { AbstractControl, FormArray, FormGroup, UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { FormControlErrors } from '@app/shared/modules/cdk/form/form-errors';

/**
 * extend every form with this class to indicate invalid inputs on form submit, get typed form data and to use custom validators
 */
export abstract class RcBaseFormTyped<T> {
  public static recursiveTouch(control: AbstractControl): void {
    if (!control.touched) {
      control.markAsTouched();
      control.updateValueAndValidity();
    }

    if (control instanceof FormGroup || control instanceof FormArray) {
      Object.values(control.controls).forEach(ctrl => this.recursiveTouch(ctrl));
    }
  }

  public abstract readonly formGroup: FormGroup;
  protected abstract formErrors: FormControlErrors;

  public knownErrorsForControl(path: string | (string | number)[], formArrayControlIndex?: number): string[] {
    return this.formErrors.knownErrorsForControl(path, formArrayControlIndex);
  }

  public submit(): T | null {
    RcBaseFormTyped.recursiveTouch(this.formGroup);

    if (!this.formGroup.valid) {
      return null;
    }

    return this.getFormValue();
  }

  protected abstract getFormValue(): T;
}
