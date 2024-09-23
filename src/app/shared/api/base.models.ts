import { FractionFullInfo } from '@app/shared/api/fractions/models';
import {
  AuthorizedUserPoint,
  ModeratorPoint,
  PointPublic,
  PointShortPublic,
  UserRole,
} from '@app/shared/api/points/models';
import { CommentStatus } from '@app/shared/api/comments/models';

export interface BaseResponse<D = null> {
  isSuccess: boolean;
  data?: D;
  errors?: ResponseErrors;
}
// add this interface to make request interfaces compatible with HttpParams.appendAll() method
export interface RequestParams {
  [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
}

export interface PointsResponse
  extends BaseResponse<
    PointsData | PointPublic | AuthorizedUserPoint | ModeratorPoint | FractionFullInfo[]
  > {}

export interface PointsData {
  totalResults: number;
  points: PointShortPublic[] | AuthorizedUserPoint[];
}

export interface Photo {
  path: string;
  thumb: string;
  order: number;
  photo_id: number;
}

export interface PasteComment extends Required<Omit<BaseComment, 'photoset'>> {
  photoset: number[];
}

export interface PublicComment extends Required<BaseComment> {
  commentId: number;
  commentStatus?: CommentStatus;
}

export interface User {
  userId?: number;
  firstName: string;
  surname: string;
  email?: string;
  avatar: Photo[];
  role: UserRole;
}

export interface UserEditable extends User {
  subscription: UserSubscription;
  aor?: string | null;
}

export interface ResponseErrors {
  message: string;
  trace?: string;
}

export interface BaseComment {
  message: string;
  parentCommentId?: number;
  user?: User;
  timestamp?: string;
  edited?: boolean;
  photoset?: Photo[];
}

export interface UserSubscription {
  moderation: boolean;
  comments: boolean;
  aor?: boolean;
}
