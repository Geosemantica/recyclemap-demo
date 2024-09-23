import { AbstractControl, FormArray } from '@angular/forms';
import { ErrorDescription } from '@app/shared/modules/cdk/form/validators.service';
import { TranslateService } from '@ngx-translate/core';

/**
 * use form errors service to get default and custom (known) form errors within form class based on RcBaseForm abstract class
 */
export class FormControlErrors {
  /**
   *
   * @param control - Abstract form control, this might be the formGroup from parent form class or single control
   * @param translateService - just common TranslateService
   */
  constructor(
    private control: AbstractControl,
    private translate: TranslateService,
  ) {
  }

  public get hasAnyError(): boolean {
    return this.control.touched && this.control.invalid;
  }

  // if there is some known (custom) errors
  public get knownErrors(): string[] {
    const errors = this.control.errors;

    if (!this.hasAnyError || !errors) {
      return [];
    }
    // parse object of known (custom) errors to get and return every known error with params (some valid options) as string array
    return Object.values(errors)
      .filter((errors: any): errors is ErrorDescription =>
        errors != null && typeof errors === 'object' && 'message' in errors)
      .map(errors => {
        const params = 'params' in errors ? errors.params : {};

        return this.translate.instant(errors.message, params);
      });
  }

  // get known errors for single form control by emitting control name
  public knownErrorsForControl(path: string | (string | number)[], formArrayControlIndex?: number): string[] {
    let control: AbstractControl;

    if (formArrayControlIndex !== undefined) {
      control = (this.control.get(path) as FormArray).controls[formArrayControlIndex];
    } else {
      control = this.control.get(path);
    }

    if (!control) {
      return [];
    }

    const controlErrors = new FormControlErrors(control, this.translate);

    return controlErrors.knownErrors;
  }
}
