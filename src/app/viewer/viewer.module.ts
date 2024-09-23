import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RcUiKitModule } from '@app/shared/modules/ui-kit/ui-kit.module';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { ViewerComponent } from './viewer.component';
import { RcCommentsModule } from '@app/viewer/modules/comments/comments.module';
import { RcPipeModule } from '@app/shared/modules/cdk/pipes/pipe.module';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    ViewerComponent,
  ],
  imports: [
    RcCommentsModule,
    CommonModule,
    TranslateModule,
    SvgIconsModule,
    GalleryModule,
    LightboxModule,
    FormsModule,
    ReactiveFormsModule,
    RcUiKitModule,
    RcCommentsModule,
    RcPipeModule,
    RouterModule,
  ]
})
export class ViewerModule {}
