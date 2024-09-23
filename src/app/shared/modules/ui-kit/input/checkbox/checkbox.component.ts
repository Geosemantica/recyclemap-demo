import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export namespace RcCheckboxInputComponentScope {
  export type Theme = 'primary' | 'secondary';
  export type Size = 'small' | 'medium';
}

@Component({
  selector: 'rc-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RcCheckboxComponent {
  @Input()
  public value = false;

  @Input()
  public disabled = false;

  @Input()
  public hasError = false;

  @Input()
  public size: RcCheckboxInputComponentScope.Size = 'medium';

  @Input()
  public theme: RcCheckboxInputComponentScope.Theme = 'secondary';

  @Output()
  public valueChange: EventEmitter<Event> = new EventEmitter<Event>();

  @Output()
  public focusChange: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public blurChange: EventEmitter<void> = new EventEmitter<void>();

  public get classList(): string {
    return `${this.hasError ? 'error' : ''} ${this.size} ${this.theme} ${this.disabled ? 'disabled' : ''}`;
  }

  public onChange(event: Event): void {
    if (this.disabled) {
      return;
    }

    this.valueChange.emit(event);
  }

  public onFocus(): void {
    this.focusChange.emit();
  }

  public onBlur(): void {
    this.blurChange.emit();
  }
}
