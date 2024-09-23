export enum FractionType {
  RC = 'RC',
  ZW = 'ZW',
  OR = 'OR'
}

export interface FractionFullInfo {
  id: number;
  name: string;
  color: string;
  icon: string;
  type: FractionType;
}
