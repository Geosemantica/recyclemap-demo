import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@app/shared/modules/ui-kit/button/button.module';
import { InputModule } from '@app/shared/modules/ui-kit/input/input.module';
import {
  RcMultiselectFractionOptionComponent
} from '@app/shared/modules/ui-kit/select-options/multiselect-fraction-option/multiselect-fraction-option.component';
import {
  RcSelectAllOptionsComponent,
} from '@app/shared/modules/ui-kit/select-options/select-all-options/select-all-options.component';
import { RcSelectOptionsComponent } from '@app/shared/modules/ui-kit/select-options/select-options.component';
import {
  RcResetOptionsComponent,
} from '@app/shared/modules/ui-kit/select-options/reset-options/reset-options.component';
import {
  RcSingleSelectOptionComponent
} from '@app/shared/modules/ui-kit/select-options/single-select-option/single-select-option.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RcSelectOptionsComponent,
    RcMultiselectFractionOptionComponent,
    RcSingleSelectOptionComponent,
    RcResetOptionsComponent,
    RcSelectAllOptionsComponent,
  ],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    TranslateModule,
  ],
  exports: [
    RcSelectOptionsComponent,
    RcMultiselectFractionOptionComponent,
    RcSingleSelectOptionComponent,
    RcResetOptionsComponent,
    RcSelectAllOptionsComponent,
  ],
})
export class RcSelectOptionsModule {
}
