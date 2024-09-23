import { Component } from '@angular/core';
import { SelectOptionsService } from '@app/shared/modules/ui-kit/select-options/select-options.service';

@Component({
  selector: 'rc-select-all-options',
  templateUrl: './select-all-options.component.html',
})
export class RcSelectAllOptionsComponent<T> {
  constructor(
    private readonly selectOptionsService: SelectOptionsService<T>,
  ) {
  }

  public onSelectAll(): void {
    this.selectOptionsService.checkAll();
  }
}
