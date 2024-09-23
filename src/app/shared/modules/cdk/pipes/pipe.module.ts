import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TrackByIndexPipe, TrackByPropertyPipe, TrackByReferencePipe } from '@app/shared/modules/cdk/pipes/track-by.pipe';

@NgModule({
  declarations: [
    TrackByPropertyPipe,
    TrackByIndexPipe,
    TrackByReferencePipe,
  ],
  imports: [CommonModule],
  exports: [
    TrackByPropertyPipe,
    TrackByIndexPipe,
    TrackByReferencePipe,
  ]
})
export class RcPipeModule {
}
