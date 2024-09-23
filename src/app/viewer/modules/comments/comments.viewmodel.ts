import { Injectable } from '@angular/core';
import { PublicComment } from '@app/shared/api/base.models';
import {
  PrivateAndModComment,
  CommentWithReplies,
  PrivateAndModCommentWithReplies
} from '@app/shared/api/comments/models';
import { AuthorizedUserPoint, ModeratorPoint, PointPublic } from '@app/shared/api/points/models';
import { RcCommentsQuery } from '@app/stores/comments/query';
import { ScrollNavigationState } from '@app/stores/shared.models';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RcCommentsViewModel {
  constructor(
    private readonly commentsQuery: RcCommentsQuery,
  ) {
  }

  public selectPublicComments(): Observable<CommentWithReplies[]> {
    return (this.commentsQuery.selectComments() as Observable<PublicComment[]>).pipe(
      map(comments => this.convertCommentsArrayToTree(comments))
    );
  }

  public getSingleComment(commentId: number): PublicComment {
    return this.commentsQuery.getSingleComment(commentId);
  }

  public selectPointInfo(): Observable<PointPublic | AuthorizedUserPoint | ModeratorPoint> {
    return this.commentsQuery.selectPointInfo().pipe(filter(point => !!point));
  }

  public selectTitle(): Observable<string> {
    return this.selectPointInfo().pipe(map(point => point.title));
  }

  public selectTotalComments(): Observable<number> {
    return this.selectScrollNavigationState().pipe(map(navigation => navigation.totalResults));
  }

  public selectScrollNavigationState(): Observable<ScrollNavigationState> {
    return this.commentsQuery.selectScrollNavigationState();
  }
  private convertCommentsArrayToTree(
    comments: PublicComment[] | PrivateAndModComment[],
    prevCommentId = 0
  ): PrivateAndModCommentWithReplies[] | CommentWithReplies[] {
    return comments
      .filter(commentItem => commentItem.parentCommentId === prevCommentId)
      .map(commentItem => {
        return { ...commentItem, replies: this.convertCommentsArrayToTree(comments, commentItem.commentId) };
      });
  }
}
