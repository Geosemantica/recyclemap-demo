import { Component, Input } from '@angular/core';
import { SelectOptionsService } from '@app/shared/modules/ui-kit/select-options/select-options.service';
import { HelperService } from '@app/shared/services/helper.service';

@Component({
  selector: 'rc-multiselect-fraction-option',
  templateUrl: './multiselect-fraction-option.component.html',
  styleUrls: ['./multiselect-fraction-option.component.scss'],
})
export class RcMultiselectFractionOptionComponent<T> {

  @Input()
  public value!: T;

  @Input()
  public activeBackgroundColor: string;

  public readonly greyBackground = this.helperService.readScssProperty('--neutrals-grey-100');

  constructor(
    private readonly filterService: SelectOptionsService<T>,
    private readonly helperService: HelperService,
  ) {
  }

  public get isChecked(): boolean {
    return this.filterService.isChecked(this.value);
  }

  public ngOnInit(): void {
    this.filterService.listItems.push(this.value);
  }

  public checkboxToggle(): void {
    const isChecked = !this.isChecked;

    if (isChecked) {
      this.filterService.check(this.value);
    } else {
      this.filterService.uncheck(this.value);
    }
  }
}
