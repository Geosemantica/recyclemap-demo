import { FractionFullInfo } from '@app/shared/api/fractions/models';

export interface RcFractionsState {
  fractions: FractionFullInfo[] | null;
}
