import { Injectable } from '@angular/core';
import { PublicComment } from '@app/shared/api/base.models';
import { AuthorizedUserPoint, ModeratorPoint, PointPublic } from '@app/shared/api/points/models';
import { RcCommentsState } from '@app/stores/comments/models';
import { RcCommentsStore } from '@app/stores/comments/store';
import { ScrollNavigationState, SizeAndOffset } from '@app/stores/shared.models';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { PrivateAndModComment } from '@app/shared/api/comments/models';

@Injectable({ providedIn: 'root' })
@QueryConfig({
  sortBy: 'timestamp',
  sortByOrder: Order.DESC
})
export class RcCommentsQuery extends QueryEntity<RcCommentsState> {
  constructor(store: RcCommentsStore) {
    super(store);
  }

  public selectComments(): Observable<PublicComment[] | PrivateAndModComment[]> {
    return this.selectAll();
  }

  public getComments(): PublicComment[] | PrivateAndModComment[] {
    return this.getAll();
  }

  public selectPointInfo(): Observable<PointPublic | AuthorizedUserPoint | ModeratorPoint> {
    return this.select('pointInfo');
  }

  public selectScrollNavigationState(): Observable<ScrollNavigationState> {
    return this.select('scrollNavigationState');
  }

  public selectSizeAndOffset(): Observable<SizeAndOffset> {
    return this.select('sizeAndOffset');
  }

  public getSingleComment(commentId: number): PublicComment {
    return this.getEntity(commentId);
  }
}
