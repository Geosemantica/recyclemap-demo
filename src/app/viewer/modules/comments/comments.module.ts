import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RcPointsModule } from '@app/shared/modules/points/points.module';
import { RcCommentsComponent } from '@app/viewer/modules/comments/comments.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TranslateModule } from '@ngx-translate/core';
import { RcUiKitModule } from '@app/shared/modules/ui-kit/ui-kit.module';
import { RcUnauthorizedUserCommentsComponent } from './components/unauthorized-user-comments/unauthorized-user-comments.component';
import { RcBaseCommentsCardComponent } from './components/base-comments-card/base-comments-card.component';
import { RcCdkModule } from "@app/shared/modules/cdk/cdk.module";

@NgModule({
  declarations: [
    RcCommentsComponent,
    RcUnauthorizedUserCommentsComponent,
    RcBaseCommentsCardComponent,
  ],
  imports: [
    CommonModule,
    SvgIconsModule,
    RcPointsModule,
    TranslateModule,
    SvgIconsModule,
    RouterModule,
    RcUiKitModule,
    RcCdkModule,
  ],
  exports: [
    RcCommentsComponent
  ]
})
export class RcCommentsModule {
}
