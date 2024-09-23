import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

const EMAIL_REGEX = /.+@.+\..+/;
const SITE_URL_REGEX = /^https?:\/\/(?:www\.)?[-\wА-Яа-яёЁ@:%.+]+\.[\wА-Яа-яёЁ]{2,6}(?:[/?#]|$)[-\wА-Яа-яёЁ()@:%_.,+~#?&/=]*$/;
/**
 * service with custom validators
 */
@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public InputType = InputType;

  public required(params: TrimmableParams = {}, requiredInputType: InputType = InputType.COMMON): ValidatorFn {
    return (control: AbstractControl) => {
      const controlValue = control.value == null ? '' : control.value;
      if (typeof controlValue !== 'string') {
        return null;
      }

      const trimmedValue = params.trim ? controlValue.trim() : controlValue;

      if (!trimmedValue) {
        return {
          required: {
            message: 'KNOWN_ERRORS.REQUIRED.' + requiredInputType
          }
        };
      }

      return null;
    };
  }

  public notEmpty(requiredInputType: InputType = InputType.COMMON): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value === null) {
        return null;
      }

      if (control.value.length === 0) {
        return {
          notEmpty: {
            message: 'KNOWN_ERRORS.REQUIRED.' + requiredInputType
          }
        };
      }

      return null;
    };
  }

  public equalsTo(controlToCompare: AbstractControl, inputType: InputType = InputType.COMMON): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value !== controlToCompare.value) {
        return {
          equalsTo: {
            message: 'KNOWN_ERRORS.UNEQUAL.' + inputType
          }
        };
      }

      return null;
    };
  }

  public timeComparator(controlToCompare: AbstractControl): ValidatorFn {
    return (control: AbstractControl) => {
      const currentDate = new Date().toISOString().split('T')[0];
      const controlTimestamp = new Date(`${currentDate}T${control.value}`).getTime();
      const controlToCompareTimestamp = new Date(`${currentDate}T${controlToCompare.value}`).getTime();

      if (controlTimestamp < controlToCompareTimestamp) {
        return {
          timeComparator: {
            message: 'KNOWN_ERRORS.TIME_IS_INCORRECT'
          }
        };
      }

      return null;
    };
  }

  public maxLength(maxLength: number, params: TrimmableParams = {}): ValidatorFn {
    return (control: AbstractControl) => {
      const controlValue = control.value || '';
      const trimmedValue = params.trim ? controlValue.trim() : controlValue;

      if (!trimmedValue) {
        return null;
      }

      if (trimmedValue.length > maxLength) {
        return {
          maxLength: {
            message: 'KNOWN_ERRORS.MAX_LENGTH',
            params: { maxLength }
          }
        };
      }
      return null;
    };
  }

  public minLength(minLength: number, params: TrimmableParams = {}): ValidatorFn {
    return (control: AbstractControl) => {
      const controlValue = control.value || '';
      const trimmedValue = params.trim ? controlValue.trim() : controlValue;

      if (!trimmedValue) {
        return null;
      }

      if (trimmedValue.length < minLength) {
        return {
          maxLength: {
            message: 'KNOWN_ERRORS.MIN_LENGTH',
            params: { minLength }
          }
        };
      }
      return null;
    };
  }

  public email(params: TrimmableParams = {}): ValidatorFn {
    return (control: AbstractControl) => {
      const controlValue: string = control.value || '';
      const value = params.trim ? controlValue.trim() : controlValue;

      if (!value) {
        return null;
      }

      const email = new RegExp(EMAIL_REGEX);

      return email.test(control.value)
        ? null
        : {
            email: {
              message: 'KNOWN_ERRORS.EMAIL'
            }
          };
    };
  }

  public digitsOnly(params: TrimmableParams = {}): ValidatorFn {
    return (control: AbstractControl) => {
      const controlValue: string = control.value || '';
      const value = params.trim ? controlValue.trim() : controlValue;

      if (!value) {
        return null;
      }

      const email = new RegExp(/^\d+$/);

      return email.test(control.value)
        ? null
        : {
            digitsOnly: {
              message: 'KNOWN_ERRORS.DIGITS_ONLY'
            }
        };
    };
  }

  public siteUrl(params: TrimmableParams = {}): ValidatorFn {
    return (control: AbstractControl) => {
      const controlValue: string = control.value || '';
      const value = params.trim ? controlValue.trim() : controlValue;

      if (!value) {
        return null;
      }

      const email = new RegExp(SITE_URL_REGEX);
      console.log(email.test(control.value))
      return email.test(control.value)
        ? null
        : {
            siteUrl: {
              message: 'KNOWN_ERRORS.SITE_URL'
           }
        };
    };
  }
}

export interface TrimmableParams {
  trim?: boolean;
}

export interface ErrorDescription {
  message: string;
  params?: { [key: string]: string | number };
}

export enum InputType {
  COMMON = 'COMMON',
  EMAIL = 'EMAIL',
  PASSWORD = 'PASSWORD',
  CODE = 'CODE',
  MULTISELECT = 'MULTISELECT',
  TIME = 'TIME',
}
