import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RcButtonComponent } from '@app/shared/modules/ui-kit/button/button.component';
import { ButtonModule } from '@app/shared/modules/ui-kit/button/button.module';
import { RcIconButtonComponent } from '@app/shared/modules/ui-kit/button/icon-button/icon-button.component';
import { InputModule } from '@app/shared/modules/ui-kit/input/input.module';
import { RcLabelModule } from '@app/shared/modules/ui-kit/label/label.module';
import { LoaderModule } from '@app/shared/modules/ui-kit/loader/loader.module';
import { RcSelectOptionsModule } from '@app/shared/modules/ui-kit/select-options/select-options.module';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { RcUserAvatarModule } from '@app/shared/modules/ui-kit/user-avatar/user-avatar.module';
import { RcUserFullNameModule } from '@app/shared/modules/ui-kit/user-full-name/user-full-name.module';
import { TextSeparatorModule } from '@app/shared/modules/ui-kit/text-separator/text-separator.module';
import {RcBadgeModule} from "@app/shared/modules/ui-kit/badge/badge.module";

@NgModule({
  imports: [
    CommonModule,
    SvgIconsModule,
    InputModule,
    ButtonModule,
    LoaderModule,
    RcLabelModule,
    RcSelectOptionsModule,
    RcUserAvatarModule,
    RcUserFullNameModule,
    TextSeparatorModule,
    RcBadgeModule,
  ],
  exports: [
    RcButtonComponent,
    RcIconButtonComponent,
    InputModule,
    ButtonModule,
    LoaderModule,
    RcLabelModule,
    RcSelectOptionsModule,
    RcUserAvatarModule,
    RcUserFullNameModule,
    TextSeparatorModule,
    RcBadgeModule,
  ]
})
export class RcUiKitModule {}
