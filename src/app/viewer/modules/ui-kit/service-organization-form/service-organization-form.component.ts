import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RcCdkModule } from '@app/shared/modules/cdk/cdk.module';
import { RcUiKitModule } from '@app/shared/modules/ui-kit/ui-kit.module';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TranslateModule } from '@ngx-translate/core';
import {
  MultipleOrganizationField,
  RcServiceOrganizationForm,
} from "@app/viewer/modules/ui-kit/service-organization-form/form";

@Component({
  selector: 'rc-service-organization',
  templateUrl: './service-organization-form.component.html',
  styleUrls: ['./service-organization-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    SvgIconsModule,
    RcUiKitModule,
    ReactiveFormsModule,
    RcCdkModule
  ],
  providers: [RcServiceOrganizationForm],
})
export class RcServiceOrganizationFormComponent  {
  public readonly MultipleOrganizationField = MultipleOrganizationField;
  public readonly maxMultipleFieldsAmount = 6;

  constructor(
    public form: RcServiceOrganizationForm,
  ) {
  }

  public onSubmitButtonClick(): void {
    const form = this.form.submit();

    if (!form) return;

    alert('form submitted');

    this.form.formGroup.reset();
  }

  public onAddNewFieldClick(fieldType: MultipleOrganizationField): void {
    this.form.addField(fieldType);
  }

  public isAddFieldButtonVisible(fieldType: MultipleOrganizationField): boolean {
    switch (fieldType) {
      case MultipleOrganizationField.emails:
        return this.form.organizationEMails.length < this.maxMultipleFieldsAmount;
      case MultipleOrganizationField.phones:
        return this.form.organizationPhones.length < this.maxMultipleFieldsAmount;
      case MultipleOrganizationField.sites:
        return this.form.organizationWebSites.length < this.maxMultipleFieldsAmount;
    }
  }

  public onRemoveFieldClick(fieldType: MultipleOrganizationField, index: number): void {
    this.form.removeField(fieldType, index);
  }
}
