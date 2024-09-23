import { Directive, OnInit } from '@angular/core';
import { RcCommentsViewModel } from '@app/viewer/modules/comments/comments.viewmodel';
import { HelperService } from '@app/shared/services/helper.service';
import { TranslateService } from '@ngx-translate/core';

@Directive()
export abstract class RcCommentsBaseComponent implements OnInit {
  constructor(
    public readonly commentsViewModel: RcCommentsViewModel,
    public readonly helperService: HelperService,
    public readonly translate: TranslateService,
  ) {
  }

  public ngOnInit() {
    // comments request
  }

  public abstract onReplyClick(commentId: number): void;
}
