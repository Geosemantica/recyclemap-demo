import { Component, Input } from '@angular/core';
import { SelectOptionsService } from '@app/shared/modules/ui-kit/select-options/select-options.service';

@Component({
  selector: 'rc-single-select-option',
  templateUrl: './single-select-option.component.html',
  styleUrls: ['./single-select-option.component.scss'],
})
export class RcSingleSelectOptionComponent<T> {
  @Input()
  public value!: T;

  @Input()
  public optionDescription!: string;

  constructor(
    private readonly selectOptionsService: SelectOptionsService<T>,
  ) {
  }

  public get isChecked(): boolean {
    return this.selectOptionsService.isChecked(this.value);
  }

  public onClick(): void {
    if (this.isChecked) {
      return;
    }

    this.selectOptionsService.selectOne(this.value)
  }
}
