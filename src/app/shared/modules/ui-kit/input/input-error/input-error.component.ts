import { Component, Input } from '@angular/core';

@Component({
  selector: 'rc-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss'],
})
export class RcInputErrorComponent {

  @Input()
  public errors: string[];

  @Input()
  public maxDisplayedErrors = 1;

  public get errorsString(): string {
    return this.errors.slice(0, this.maxDisplayedErrors).join('. ');
  }
}
