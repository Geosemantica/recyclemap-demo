import { Component, OnInit } from '@angular/core';
import { ACCESSIBILITY_OPTIONS, SCHEDULE_OPTIONS } from '@app/app.constants';
import { RestrictedState } from '@app/app.models';
import { FractionFullInfo } from '@app/shared/api/fractions/models';
import {
  OpenState,
  UserRole
} from '@app/shared/api/points/models';
import { SubscriberComponent } from '@app/shared/modules/cdk/cdk.module';
import { RcMultiSelectControl } from '@app/shared/modules/cdk/multi-select.control';
import { HelperService } from '@app/shared/services/helper.service';
import { first, skip, switchMap } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RcPointsFiltersForm } from "@app/viewer/modules/ui-kit/components/points-filters/form";
import { RcPointsFiltersViewModel } from "@app/viewer/modules/ui-kit/components/points-filters/points-filters.viewmodel";
import { RcQueryParamsService } from "@app/shared/modules/cdk/query-params.service";

@Component({
  selector: 'rc-points-filters',
  templateUrl: './points-filters.component.html',
  styleUrls: ['./points-filters.component.scss'],
  providers: [RcPointsFiltersForm]
})
export class RcPointsFiltersComponent extends SubscriberComponent implements OnInit {
  public multiselectControl!: RcMultiSelectControl<FractionFullInfo>;

  public readonly SCHEDULE_OPTIONS = SCHEDULE_OPTIONS;
  public readonly ACCESSIBILITY_OPTIONS = ACCESSIBILITY_OPTIONS;

  public readonly openState = OpenState;
  public readonly restrictedState = RestrictedState;

  public readonly greyIcon = this.helperService.readScssProperty('--neutrals-grey-400');

  public readonly fractions = this.viewModel.selectFractionsList();

  public readonly UserRole = UserRole;

  constructor(
    public readonly form: RcPointsFiltersForm,
    private readonly helperService: HelperService,
    private readonly viewModel: RcPointsFiltersViewModel,
    private readonly queryParamsService: RcQueryParamsService,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.subscribe(
      this.viewModel.selectFractionsList().pipe(
        first(),
        tap(fractions => (this.multiselectControl = new RcMultiSelectControl<FractionFullInfo>(fractions, 'id'))),
        switchMap(() => this.multiselectControl.selectValueChanges()),
        skip(1),
        tap(values =>
          this.queryParamsService.setQueryParams({
            fractions: [...values.values()].join(',') || null
          })
        )
      )
    );

    // form subscription. listens for form controls value changes
    this.subscribe(
      this.form.formGroup.valueChanges.pipe(
        tap(filtersValue =>
          this.queryParamsService.setQueryParams({ ...filtersValue }))
      )
    );
  }

  public isActive(key: number): boolean {
    return this.multiselectControl.isSelected(key.toString());
  }

  public toggleFilterItem(key: number): void {
    this.multiselectControl.setItemState(key.toString(), !this.isActive(key));
  }

  public resetFilters(): void {
    this.multiselectControl.resetActiveItems();
  }
}
