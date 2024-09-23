import { Component } from '@angular/core';
import { RcCommentsViewModel } from "@app/viewer/modules/comments/comments.viewmodel";

@Component({
  selector: 'rc-base-comments-card',
  templateUrl: './base-comments-card.component.html',
  styleUrls: ['./base-comments-card.component.scss'],
})
export class RcBaseCommentsCardComponent {
  public readonly pointTitle = this.commentsViewModel.selectTitle();
  public readonly totalComments = this.commentsViewModel.selectTotalComments();

  constructor(
    private readonly commentsViewModel: RcCommentsViewModel,
  ) {
  }
}
