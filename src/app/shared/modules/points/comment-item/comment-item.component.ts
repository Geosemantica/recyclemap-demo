import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Photo, User } from '@app/shared/api/base.models';
import { CommentWithReplies } from '@app/shared/api/comments/models';
import { UserRole } from '@app/shared/api/points/models';
import { STATIC_IMAGE_URL } from '@app/app.constants';

@Component({
  selector: 'rc-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class RcCommentItemComponent {
  @Input()
  public commentId!: number;

  @Input()
  public message!: string;

  @Input()
  public parentCommentId!: number;

  @Input()
  public user: User;

  @Input()
  public photos!: Photo[];

  @Input()
  public publicReplies: CommentWithReplies[];

  @Input()
  public date: string;

  @Input()
  public canReply = true;

  @Input()
  public canDelete = false;

  @Input()
  public moderatorMode = false;

  @Output()
  public replyClicked = new EventEmitter<number>();

  public readonly STATIC_IMAGE_URL = STATIC_IMAGE_URL;

  public get isModerator(): boolean {
    return this.user.role === UserRole.MODERATOR;
  }

  public onReplyClick(commentId: number): void {
    this.replyClicked.next(commentId);
  }
}
