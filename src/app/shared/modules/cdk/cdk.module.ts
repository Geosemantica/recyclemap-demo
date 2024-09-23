import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlDirective } from '@app/shared/modules/cdk/form-control/form-control.directive';
import { RcPipeModule } from '@app/shared/modules/cdk/pipes/pipe.module';
export { RcMultiSelectControl } from './multi-select.control';
export { SubscriberComponent } from './subscriber-component';
export { AbstractFormControl } from './form-control/abstract-form-control.directive';
export { RcBaseForm } from './form/base-form';
export { FormControlErrors } from './form/form-errors';
export { ValidatorsService } from './form/validators.service';
export { LoaderService } from './loader.service';

@NgModule({
  declarations: [
    FormControlDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RcPipeModule,
  ],
  exports: [
    FormControlDirective,
    RcPipeModule,
  ]
})
export class RcCdkModule {
}
