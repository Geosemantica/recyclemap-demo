import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RcCdkModule } from '@app/shared/modules/cdk/cdk.module';
import { ButtonModule } from '@app/shared/modules/ui-kit/button/button.module';
import { RcCheckboxComponent } from '@app/shared/modules/ui-kit/input/checkbox/checkbox.component';
import { RcCheckboxInputComponent } from '@app/shared/modules/ui-kit/input/checkbox-input/checkbox-input.component';
import { RcIconInputComponent } from '@app/shared/modules/ui-kit/input/icon-input/icon-input.component';
import { RcInputErrorComponent } from '@app/shared/modules/ui-kit/input/input-error/input-error.component';
import { RcInputComponent } from '@app/shared/modules/ui-kit/input/input.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RcInputErrorComponent,
    RcCheckboxComponent,
    RcCheckboxInputComponent,
    RcInputComponent,
    RcIconInputComponent,
  ],
  imports: [
    CommonModule,
    SvgIconsModule,
    ButtonModule,
    RcCdkModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
  exports: [
    RcInputErrorComponent,
    RcCheckboxComponent,
    RcCheckboxInputComponent,
    RcInputComponent,
    RcIconInputComponent,
  ]
})
export class InputModule {}
