import { Injectable } from '@angular/core';
import { FractionFullInfo } from '@app/shared/api/fractions/models';
import { RcFractionsState } from '@app/stores/fractions/models';
import { RcFractionsStore } from '@app/stores/fractions/store';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RcFractionsQuery extends Query<RcFractionsState> {

  constructor(store: RcFractionsStore) {
    super(store);
  }

  public selectFractionsList(): Observable<FractionFullInfo[]> {
    return this.select('fractions');
  }

  public getFractionsList(): FractionFullInfo[] {
    return this.getValue().fractions;
  }
}
