import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RcLabelDescriptionComponent } from '@app/shared/modules/ui-kit/label/label-description/label-description.component';
import { RcLabelComponent } from '@app/shared/modules/ui-kit/label/label.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RcLabelComponent,
    RcLabelDescriptionComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports: [
    RcLabelComponent,
    RcLabelDescriptionComponent
  ],
})
export class RcLabelModule {
}
