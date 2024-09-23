import { NgModule } from "@angular/core";
import { RcUiKitDemoComponent } from "@app/viewer/modules/ui-kit/ui-kit-demo.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { SvgIconsModule } from "@ngneat/svg-icon";
import { GalleryModule } from "ng-gallery";
import { LightboxModule } from "ng-gallery/lightbox";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RcUiKitModule } from "@app/shared/modules/ui-kit/ui-kit.module";
import { RcMarkerComponent } from "@app/viewer/modules/ui-kit/components/marker/marker.component";
import { RcMarkerPopUpComponent } from "@app/viewer/modules/ui-kit/components/marker/marker-pop-up/marker-pop-up.component";
import { RcPointsFiltersModule } from "@app/viewer/modules/ui-kit/components/points-filters/points-filters.module";
import {
  RcServiceOrganizationFormComponent
} from "@app/viewer/modules/ui-kit/service-organization-form/service-organization-form.component";

@NgModule({
  declarations: [RcUiKitDemoComponent, RcMarkerComponent, RcMarkerPopUpComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    SvgIconsModule,
    GalleryModule,
    LightboxModule,
    FormsModule,
    ReactiveFormsModule,
    RcUiKitModule,
    RcPointsFiltersModule,
    RcServiceOrganizationFormComponent
  ],
})
export class RcUiKitDemoModule {
}
