import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RcUserFullNameComponent } from "@app/shared/modules/ui-kit/user-full-name/user-full-name.component";

@NgModule({
  declarations: [RcUserFullNameComponent],
  imports: [
    CommonModule,
  ],
  exports: [RcUserFullNameComponent],
})
export class RcUserFullNameModule {
}
