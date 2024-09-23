import { BaseResponse, PublicComment, Photo, User } from '../base.models';
import { Params } from '@angular/router';
import { RestrictedState } from '@app/app.models';
import { FractionType } from '@app/shared/api/fractions/models';

export interface EditPointRequest extends Partial<AddPointRequest> {}

export interface EditPointByModeratorRequest extends EditPointRequest {
  enable?: boolean;
}

export interface EditPointResponse extends BaseResponse<number> {}

export interface AddPointRequest extends BasePoint {
  fractions: string[];
  operator?: Operator | number;
  photoset?: number[];
}

export interface EditPointRequest extends Partial<AddPointRequest> {}

export interface AddPointResponse extends BaseResponse<number> {}

export interface ModeratorGeosearchParams
  extends Omit<ModeratorFiltersParams, PublicFiltersEnum.restricted>,
    BaseGeosearchParams {
  [PublicFiltersEnum.restricted]?: string;
}

export interface PrivateGeosearchParams
  extends Omit<PrivateFiltersParams, PublicFiltersEnum.restricted>,
    BaseGeosearchParams {
  [PublicFiltersEnum.restricted]?: string;
}

export interface PublicGeosearchParams
  extends Omit<PublicFiltersParams, PublicFiltersEnum.restricted>,
    BaseGeosearchParams {
  [PublicFiltersEnum.restricted]?: string;
}

export enum PublicFiltersEnum {
  fractions = 'fractions',
  open = 'open',
  restricted = 'restricted',
}

export enum PrivateFiltersEnum {
  mypoints = 'mypoints',
  myedits = 'myedits',
  mycomments = 'mycomments',
}

export enum ModeratorFiltersEnum {
  myaor = 'myaor',
  needmod = 'needmod',
  missmod = 'missmod',
  newcomments = 'newcomments',
  myaorboundary = 'myaorboundary',
  disabled = 'disabled',
}

export interface PublicFiltersParams extends Params {
  [PublicFiltersEnum.fractions]?: string; // comma delimited id fractions
  [PublicFiltersEnum.open]?: OpenState;
  [PublicFiltersEnum.restricted]?: RestrictedState;
}

export interface PrivateFiltersParams extends PublicFiltersParams {
  [PrivateFiltersEnum.mypoints]?: boolean;
  [PrivateFiltersEnum.myedits]?: boolean;
  [PrivateFiltersEnum.mycomments]?: boolean;
}

export interface ModeratorFiltersParams extends PrivateFiltersParams {
  [ModeratorFiltersEnum.myaor]?: boolean;
  [ModeratorFiltersEnum.needmod]?: boolean;
  [ModeratorFiltersEnum.missmod]?: boolean;
  [ModeratorFiltersEnum.myaorboundary]?: boolean;
  [ModeratorFiltersEnum.disabled]?: boolean;
  [ModeratorFiltersEnum.newcomments]?: boolean;
}

export interface BaseGeosearchParams extends Params {
  bbox: string;
  size?: number;
  offset?: number;
}

export interface DeletePointRequest {
  reason: string;
  photoset?: number[];
}

export interface BasePoint {
  title: string;
  address: string;
  addressDescription?: string;
  pointDescription: string;
  restricted?: boolean;
  precise?: boolean;
  schedule?: Schedule[];
  geom?: string;
  scheduleDescription?: string;
  lastUpdate: string;
  moderators: User[];
}

export interface PointShortPublic extends Required<BasePoint> {
  fractions: Fraction[];
  pointId: number;
  businesHoursState: BusinessHoursState;
  rating: Rating;
  numberOfComments: number;
}

export interface Fraction {
  id: number;
  name: string;
  color: string;
  icon: string;
  type: FractionType;
}

export interface Rating {
  likes: number;
  dislikes: number;
  score: number;
}

export interface BusinessHoursState {
  state: WorkingState;
  nextStateTime: string;
}

export enum WorkingState {
  OPEN = 'open',
  CLOSED = 'closed',
  ALLDAY = 'allday',
}

export interface PointPublic extends PointShortPublic {
  operator: Operator;
  pointDescription: string;
  photos: Photo[];
  comments: PublicComment[];
  validDates: ValidDates[];
  type: FractionType;
}

export interface AuthorizedUserPoint extends PointPublic {
  iLike: boolean;
  iDisike: boolean;
  myFavorite: boolean;
  myPoint: boolean;
  myEdits: boolean;
  needMod: boolean;
  inProgress: PointProgress;
  disabled: boolean;
}

export interface ModeratorPoint extends AuthorizedUserPoint {
  myAoR: boolean;
  missMod: boolean;
  numberOfNewComments: number;
  numberOfICareComments: number;
  creator: User;
}

export interface Schedule {
  dow: number;
  opens: string[];
  closes: string[];
}

export interface Operator {
  operatorId: number;
  title: string;
  address: string;
  phones: string[];
  emails: string[];
  sites: string[];
}

export interface ValidDates {
  validFrom: string;
  validThrough: string;
}

export enum UserRole {
  USER = 'USER',
  MODERATOR = 'MODERATOR',
  ADMINISTRATOR = 'ADMIN',
  DELETED = 'DELETED',
}

export enum OpenState {
  NOW = 'now',
  ALLDAY = 'allday',
  ANY = 'any',
}

export enum UserReactionType {
  LIKE = 'like',
  DISLIKE = 'dislike',
  NEUTRAL = 'neutral',
}

export enum PointProgress {
  ADD = 'add',
  EDIT = 'edit',
  DELETE = 'delete',
  DISABLE = 'disable',
}

export enum PointDisableStatus {
  ACTIVE = 'false',
  DISABLED = 'true',
}
