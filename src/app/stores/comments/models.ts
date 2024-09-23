import { PublicComment } from '@app/shared/api/base.models';
import { AuthorizedUserPoint, ModeratorPoint, PointPublic } from '@app/shared/api/points/models';
import { ScrollNavigationState, SizeAndOffset } from '@app/stores/shared.models';
import { EntityState } from '@datorama/akita';

export interface RcCommentsState extends EntityState<PublicComment, number> {
  pointInfo: PointPublic | AuthorizedUserPoint | ModeratorPoint | null;
  scrollNavigationState: ScrollNavigationState;
  sizeAndOffset: SizeAndOffset;
}
