import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FiltersOption } from '@app/app.models';
import { RcMultiSelectControl } from '@app/shared/modules/cdk/multi-select.control';
import { HelperService } from '@app/shared/services/helper.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, skip } from 'rxjs';
import { SubscriberComponent } from "@app/shared/modules/cdk/cdk.module";
import { tap } from "rxjs/operators";

export enum FiltersSelectionType {
  SINGLE = 'single',
  MULTIPLE = 'multiple'
}

export namespace RcSelectFilterComponentScope {
  export type Theme = 'primary' | 'no-style';
  export type Align = 'left' | 'right';
}

@Component({
  selector: 'rc-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RcSelectFilterComponent
    }
  ]
})
export class RcSelectFilterComponent extends SubscriberComponent implements ControlValueAccessor, OnInit {
  @Input()
  public filtersOptions!: FiltersOption[];

  @Input()
  public filtersSelectionType: FiltersSelectionType = FiltersSelectionType.SINGLE;

  @Input()
  public initialButtonValue!: string;

  @Input()
  public initialSelectedValue!: string;

  @Input()
  public theme: RcSelectFilterComponentScope.Theme = 'primary';

  @Input()
  public align: RcSelectFilterComponentScope.Align = 'left'

  public readonly greyIcon = this.helperService.readScssProperty('--neutrals-grey-400');
  public readonly greenIcon = this.helperService.readScssProperty('--brand-primary-green');

  public isDropdownShown = false;

  public FiltersSelectionType = FiltersSelectionType;

  @ViewChild('containerRef')
  public containerRef!: ElementRef<HTMLElement>;

  public multiselectControl!: RcMultiSelectControl<FiltersOption>;

  constructor(
    private readonly helperService: HelperService,
    private readonly translateService: TranslateService
  ) {
    super();
  }

  public get hasSelected(): boolean {
    if (!this.hasInitialValue) {
      return !!this.multiselectControl.selectedIds.length;
    } else {
      return false;
    }
  }

  public get getIconColor(): string {
    if (this.hasSelected && this.theme === 'no-style'){
      return this.greyIcon;
    }
    return this.hasSelected ? this.greenIcon : this.greyIcon;
  }

  public get getCurrentFilterValue(): Observable<string> {
    return this.hasSelected
      ? this.translateService.get('FILTER_OPTIONS.' + this.getSelectedOptionId.toUpperCase())
      : of(this.initialButtonValue);
  }

  private get getSelectedOptionId(): string {
    return this.multiselectControl.selectedIds[0];
  }

  private get hasInitialValue(): boolean {
    return this.initialSelectedValue && this.multiselectControl.selectedIds.includes(this.initialSelectedValue);
  }

  public ngOnInit(): void {
    this.multiselectControl = new RcMultiSelectControl<FiltersOption>(this.filtersOptions, 'filterKey');

    if (this.initialSelectedValue) {
      this.multiselectControl.setItemState(this.initialSelectedValue, true, true);
    }
  }

  @HostListener('focusout', ['$event'])
  public onFocusout(event: FocusEvent): void {
    const relatedElement: HTMLElement | null = <HTMLElement>event.relatedTarget;
    if (relatedElement === null || !this.containerRef.nativeElement.contains(relatedElement)) {
      this.isDropdownShown = false;
    }
  }

  public toggleDropdown(): void {
    this.isDropdownShown = !this.isDropdownShown;
  }

  public isSelected(id: string): boolean {
    return this.multiselectControl.isSelected(id);
  }

  public selectOption(id: string): void {
    if (this.filtersSelectionType === FiltersSelectionType.MULTIPLE) {
      this.multiselectControl.setItemState(id, !this.isSelected(id));
      return;
    }

    if (!this.isSelected(id)) {
      this.multiselectControl.resetActiveItems(true);
      this.multiselectControl.setItemState(id, true);
      this.isDropdownShown = false;
    }
  }

  public registerOnChange(callbackFn: any): void {
    this.subscribe(this.multiselectControl.selectValueChanges().pipe(
      skip(1),
      tap(value => {
        if (!this.hasInitialValue) {
          callbackFn([...value.values()].join(','));
        } else {
          callbackFn(null);
        }
      })
    ));
  }

  public registerOnTouched(fn: any): void {}

  public writeValue(id: string | null): void {
    if (id) {
      if (this.hasInitialValue) {
        this.multiselectControl.setItemState(this.getSelectedOptionId, false, true);
      }
      this.multiselectControl.setItemState(id, true);
    } else {
      this.multiselectControl.resetActiveItems(true);
      this.multiselectControl.setItemState(this.initialSelectedValue, true, true);
    }
  }
}
