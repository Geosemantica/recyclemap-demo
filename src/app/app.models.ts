import { Params } from '@angular/router';
import { Fraction, OpenState, PublicFiltersParams, UserRole } from '@app/shared/api/points/models';
import { FractionType } from '@app/shared/api/fractions/models';

export enum LANGUAGES {
  RU = 'ru',
}

export interface FiltersOption {
  filterKey: string;
}

export type RcActiveLayer = 'rc' | 'zw';

export interface RcQueryParams extends RcFiltersQueryParams {
  center?: string;
  dialogData?: string;
  'comments-moder-mode'?: number;
  'active-layer'?: RcActiveLayer;
}

export interface RcFiltersQueryParams extends RcModeratorFiltersQueryParams {}

export interface RcPublicFiltersQueryParams extends PublicFiltersParams {}

export interface RcPrivateFiltersQueryParams extends RcPublicFiltersQueryParams {
  mypoints?: 'true' | null;
  mycomments?: 'true' | null;
  myedits?: 'true' | null;
}

export interface RcModeratorFiltersQueryParams extends RcPrivateFiltersQueryParams {
  myaor?: 'true' | null;
  needmod?: 'true' | null;
  missmod?: 'true' | null;
  myaorboundary?: 'true' | null;
  newcomments?: 'true' | null;
  disabled?: 'true' | null;
}


export enum RestrictedState {
  ALL_POINTS = 'all_points',
  ONLY_PUBLIC = 'only_public',
  ONLY_PRIVATE = 'only_private',
}

export interface FeatureProperties {
  id: number;
  restricted: boolean;
  title: string;
  needMod: boolean;
  missMod: boolean;
  myAoR: boolean;
  type: FractionType;
}

export interface Marker extends FeatureProperties {
  coordinates: [number, number];
  fractions: Fraction[];
  active?: boolean;
  disabled?: boolean;
  type: FractionType;
  isSmallPin: boolean;
  userRole?: UserRole;
}
