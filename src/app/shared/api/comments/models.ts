import { BaseComment, BaseResponse, PublicComment, RequestParams} from '@app/shared/api/base.models';

export interface CommentsResponse extends BaseResponse<CommentsData> {
}

export interface CommentsData {
  comments: PublicComment[] | PrivateAndModComment [];
  totalResults: number;
}

export interface CommentsRequest extends RequestParams {
  pointId: number;
  size?: number;
  offset?: number;
}

export interface CommentStatusChangeRequest {
  statusSlug: CommentStatus;
}

export interface DeleteCommentByModRequest extends RequestParams {
  mode: ModeratorDeletionMode;
}

export interface PrivateAndModComment extends PublicComment {
  myComment: boolean;
}

export interface CommentWithReplies extends PublicComment {
  replies: CommentWithReplies[];
}

export interface PrivateAndModCommentWithReplies extends PrivateAndModComment {
  replies: PrivateAndModCommentWithReplies[];
}

export interface AddNewComment extends Pick<BaseComment, 'message' | 'parentCommentId'> {
  pointId: number,
  photoset: number[];
}

export enum CommentStatus {
  NEW = 'NEW',
  ICARE = 'ICARE',
  DELMOD = 'DELMOD',
  DELME = 'DELME',
}

export enum ModeratorDeletionMode {
  SINGLE = 'single',
  CHILD = 'child',
}
