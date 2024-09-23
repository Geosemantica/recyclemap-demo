import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { RcUserAvatarComponent } from "@app/shared/modules/ui-kit/user-avatar/user-avatar.component";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [RcUserAvatarComponent],
  imports: [
    CommonModule,
    SvgIconsModule,
    TranslateModule,
  ],
  exports: [RcUserAvatarComponent],
})
export class RcUserAvatarModule {
}
