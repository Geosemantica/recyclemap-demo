import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RcLoaderComponent } from '@app/shared/modules/ui-kit/loader/loader.component';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  declarations: [RcLoaderComponent],
  imports: [
    CommonModule,
    SvgIconsModule,
  ],
  exports: [RcLoaderComponent],
})
export class LoaderModule {
}
