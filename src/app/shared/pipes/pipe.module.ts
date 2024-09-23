import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RcDatePipe } from '@app/shared/pipes/date.pipe';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RcDatePipe,
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports: [
    RcDatePipe,
  ]
})
export class RcPipeModule {}
