import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RcBadgeComponent } from "@app/shared/modules/ui-kit/badge/badge.component";
import { SvgIconsModule } from "@ngneat/svg-icon";
import { BadgeGroupComponent } from './badge-group/badge-group.component';

@NgModule({
  declarations: [
    RcBadgeComponent,
    BadgeGroupComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    SvgIconsModule,
  ],
  exports: [
    RcBadgeComponent,
    BadgeGroupComponent,
  ],
})
export class RcBadgeModule {
}
