import { RcQueryParams } from "@app/app.models";
import { ActivatedRoute, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class RcQueryParamsService {
  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {}

  public setQueryParams(queryParams: Partial<RcQueryParams>): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams,
      queryParamsHandling: 'merge'
    });
  }
}
