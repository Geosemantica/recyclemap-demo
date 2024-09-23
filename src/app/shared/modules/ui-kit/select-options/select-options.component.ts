import { Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { AbstractFormControl } from '@app/shared/modules/cdk/cdk.module';
import { SelectOptionsService } from '@app/shared/modules/ui-kit/select-options/select-options.service';

export namespace RcSelectOptionsComponentScope {
  export type Direction = 'row' | 'column';
}

@Component({
  selector: 'rc-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.scss'],
  providers: [
    SelectOptionsService,
    AbstractFormControl.provider(RcSelectOptionsComponent),
  ]
})
export class RcSelectOptionsComponent<V> extends AbstractFormControl<V[]> implements OnInit, OnChanges {
  @Input()
  public disabled = false;

  @Input()
  public direction: RcSelectOptionsComponentScope.Direction = 'column';

  @Input()
  public bottomToolbar: TemplateRef<any> = null;

  private value: V | null = null;

  constructor(protected selectOptionsService: SelectOptionsService<V>) {
    super();
  }

  public ngOnInit(): void {
    // use SubscriberComponent later (now it throws errors)
    this.selectOptionsService.selectionChange.subscribe(value => {
      this.valueChange.emit(value);
    })
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if ('value' in changes) {
      this.selectOptionsService.writeValue([this.value]);
    }
  }

  public onBlur(): void {
    this.controlTouched.emit();
  }

  public writeValue(value: V[]): void {
    this.selectOptionsService.writeValue(value);
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
