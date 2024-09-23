import { Component } from '@angular/core';
import { RcCommentsBaseComponent } from '@app/shared/modules/points/classes/comments-base-component';

@Component({
  selector: 'rc-unauthorized-user-comments',
  templateUrl: './unauthorized-user-comments.component.html'
})
export class RcUnauthorizedUserCommentsComponent extends RcCommentsBaseComponent {
  public readonly publicComments = this.commentsViewModel.selectPublicComments();

  public onReplyClick(commentId: number): void {
  }
}
