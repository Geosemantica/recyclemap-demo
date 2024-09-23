import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RcCdkModule } from '@app/shared/modules/cdk/cdk.module';
import { RcCommentItemComponent } from '@app/shared/modules/points/comment-item/comment-item.component';
import { RcPipeModule } from '@app/shared/pipes/pipe.module';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { RcFractionsListComponent } from './fractions/fractions.component';
import { RcUiKitModule } from "@app/shared/modules/ui-kit/ui-kit.module";

@NgModule({
  declarations: [
    RcFractionsListComponent,
    RcCommentItemComponent,
    ],
  imports: [
    CommonModule,
    TranslateModule,
    GalleryModule,
    LightboxModule,
    RcPipeModule,
    SvgIconsModule,
    RcUiKitModule,
    ReactiveFormsModule,
    RouterModule,
    RcCdkModule,
  ],
  exports: [
    RcFractionsListComponent,
    RcCommentItemComponent,
  ],
})
export class RcPointsModule {
}
