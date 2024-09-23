import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { RcBaseForm } from '@app/shared/modules/cdk/form/base-form';
import { FormControlErrors } from '@app/shared/modules/cdk/form/form-errors';
import { ValidatorsService } from '@app/shared/modules/cdk/form/validators.service';
import { TranslateService } from '@ngx-translate/core';
import { MAX_EMAIL_AND_SITE_URL_LENGTH } from '@app/app.constants';

enum SingleOrganizationField {
  title = 'title'
}

export enum MultipleOrganizationField {
  phones = 'phones',
  emails = 'emails',
  sites = 'sites',
}

export interface RcServiceOrganizationFormData {
  [SingleOrganizationField.title]: string;
  [MultipleOrganizationField.phones]: string[];
  [MultipleOrganizationField.emails]: string[];
  [MultipleOrganizationField.sites]: string[];
}

export interface RcServiceOrganizationFormGroup {
  [SingleOrganizationField.title]: FormControl<string>;
  [MultipleOrganizationField.phones]: FormArray<FormControl<string>>;
  [MultipleOrganizationField.emails]: FormArray<FormControl<string>>;
  [MultipleOrganizationField.sites]: FormArray<FormControl<string>>;
}

@Injectable()
export class RcServiceOrganizationForm extends RcBaseForm<RcServiceOrganizationFormData> {
  public organizationControl = this.fb.control('');

  public organisationQueryControl = this.fb.control('');

  public readonly formGroup = this.fb.group<RcServiceOrganizationFormGroup>({
    title: this.fb.control('', [this.validators.required({ trim: true })]),
    sites: this.fb.array([
      this.fb.control('', [this.validators.siteUrl(), this.validators.maxLength(MAX_EMAIL_AND_SITE_URL_LENGTH)]),
    ]),
    emails: this.fb.array([
      this.fb.control('', [this.validators.email({ trim: true }), this.validators.maxLength(MAX_EMAIL_AND_SITE_URL_LENGTH)]),
    ]),
    phones: this.fb.array([
      this.fb.control('', [
        this.validators.digitsOnly(),
        this.validators.minLength(8),
        this.validators.maxLength(30),
      ]),
    ]),
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly translate: TranslateService,
    private readonly validators: ValidatorsService,
  ) {
    super();
  }

  public get organizationWebSites(): FormArray {
    return this.formGroup.get(MultipleOrganizationField.sites) as FormArray;
  }

  public get organizationEMails(): FormArray {
    return this.formGroup.get(MultipleOrganizationField.emails) as FormArray;
  }

  public get organizationPhones(): FormArray {
    return this.formGroup.get(MultipleOrganizationField.phones) as FormArray;
  }

  public addField(fieldType: MultipleOrganizationField): void {
    switch (fieldType) {
      case MultipleOrganizationField.sites:
        this.organizationWebSites.push(this.fb.control('', [this.validators.siteUrl(), this.validators.maxLength(MAX_EMAIL_AND_SITE_URL_LENGTH)]));
        break;
      case MultipleOrganizationField.emails:
        this.organizationEMails.push(this.fb.control('', [this.validators.email(), this.validators.maxLength(MAX_EMAIL_AND_SITE_URL_LENGTH)]));
        break;
      case MultipleOrganizationField.phones:
        this.organizationPhones.push(this.fb.control('', [
          this.validators.digitsOnly(),
          this.validators.minLength(8),
          this.validators.maxLength(30),
        ]));
        break;
    }
  }

  public removeField(fieldType: MultipleOrganizationField, index: number): void {
    switch (fieldType) {
      case MultipleOrganizationField.sites:
        this.organizationWebSites.removeAt(index);
        break;
      case MultipleOrganizationField.emails:
        this.organizationEMails.removeAt(index);
        break;
      case MultipleOrganizationField.phones:
        this.organizationPhones.removeAt(index);
        break;
    }
  }

  public createMultipleFields(values: string[], fieldType: MultipleOrganizationField): void {
    for (let i = 0; i < values.length; i++) {
      switch (fieldType) {
        case MultipleOrganizationField.emails:
          this.organizationEMails.setControl(
            i,
            this.fb.control(values[i], [this.validators.email(), this.validators.maxLength(MAX_EMAIL_AND_SITE_URL_LENGTH)]),
          );
          break;
        case MultipleOrganizationField.phones:
          this.organizationPhones.setControl(
            i,
            this.fb.control(values[i], [
              this.validators.digitsOnly(),
              this.validators.minLength(8),
              this.validators.maxLength(30),
            ]),
          );
          break;
        case MultipleOrganizationField.sites:
          this.organizationWebSites.setControl(
            i,
            this.fb.control(values[i], [this.validators.siteUrl(), this.validators.maxLength(MAX_EMAIL_AND_SITE_URL_LENGTH)]),
          );
          break;
        default:
          return;
      }
    }
  }

  protected readonly formErrors = new FormControlErrors(this.formGroup, this.translate);

  protected getFormValue(): RcServiceOrganizationFormData {
    const { title, emails, phones, sites } = this.formGroup.getRawValue();

    return {
      title,
      emails: emails.filter(value => value),
      phones: phones.filter(value => value),
      sites: sites.filter(value => value),
    };
  }
}
