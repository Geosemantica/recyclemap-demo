import { Injectable } from '@angular/core';
import { RcFractionsQuery } from "@app/stores/fractions/query";
import { FractionFullInfo } from "@app/shared/api/fractions/models";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class RcPointsFiltersViewModel {
  constructor(
    private readonly fractionsQuery: RcFractionsQuery,
  ) {
  }

  public selectFractionsList(): Observable<FractionFullInfo[]> {
    return this.fractionsQuery.selectFractionsList().pipe(filter(fractions => !!fractions));
  }
}
