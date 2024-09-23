import { FiltersOption } from '@app/app.models';

export const DEFAULT_REQUESTED_ITEMS_AMOUNT = 10;
export const SCHEDULE_OPTIONS: FiltersOption[] = [{ filterKey: 'any' }, { filterKey: 'now' }, { filterKey: 'allday' }];

export const ACCESSIBILITY_OPTIONS: FiltersOption[] = [
  { filterKey: 'all_points' },
  { filterKey: 'only_public' },
  { filterKey: 'only_private' },
];
export const STATIC_IMAGE_URL = 'https://recyclemap.ru/api/images/';
export const MAX_MARKER_FRACTIONS_AMOUNT = 6;
export const MAX_EMAIL_AND_SITE_URL_LENGTH = 256;
