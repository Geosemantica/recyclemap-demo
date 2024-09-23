import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RcCdkModule } from '@app/shared/modules/cdk/cdk.module';
import { RcPointsModule } from '@app/shared/modules/points/points.module';
import { RcUiKitModule } from '@app/shared/modules/ui-kit/ui-kit.module';
import { fractionsIcons } from '@app/svg/fractions';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TranslateModule } from '@ngx-translate/core';
import {
  RcFractionsFilterItemComponent
} from "@app/viewer/modules/ui-kit/components/points-filters/fractions-filter-item/fractions-filter-item.component";
import {
  RcSelectFilterComponent
} from "@app/viewer/modules/ui-kit/components/points-filters/select-filter/select-filter.component";
import { RcPointsFiltersComponent } from "@app/viewer/modules/ui-kit/components/points-filters/points-filters.component";

@NgModule({
  declarations: [
    RcFractionsFilterItemComponent,
    RcSelectFilterComponent,
    RcPointsFiltersComponent,
  ],
  imports: [
    CommonModule,
    RcPointsModule,
    TranslateModule,
    RcCdkModule,
    SvgIconsModule.forChild(fractionsIcons),
    ReactiveFormsModule,
    FormsModule,
    RcUiKitModule,
  ],
  exports: [RcPointsFiltersComponent],
})
export class RcPointsFiltersModule {}
