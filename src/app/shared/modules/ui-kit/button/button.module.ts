import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RcButtonComponent } from '@app/shared/modules/ui-kit/button/button.component';
import { RcIconButtonComponent } from '@app/shared/modules/ui-kit/button/icon-button/icon-button.component';
import { RcLinkButtonComponent } from '@app/shared/modules/ui-kit/button/link-button/link-button.component';
import { LoaderModule } from '@app/shared/modules/ui-kit/loader/loader.module';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { RcSelectButtonComponent } from '@app/shared/modules/ui-kit/button/select-button/select-button.component';

@NgModule({
  declarations: [
    RcIconButtonComponent,
    RcButtonComponent,
    RcLinkButtonComponent,
    RcSelectButtonComponent,
  ],
  imports: [
    CommonModule,
    SvgIconsModule,
    LoaderModule,
  ],
  exports: [
    RcIconButtonComponent,
    RcButtonComponent,
    RcLinkButtonComponent,
    RcSelectButtonComponent,
  ],
})
export class ButtonModule {
}
