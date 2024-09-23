import { Component, Input } from '@angular/core';

export namespace RcLabelComponentScope {
  export type LabelAlign = 'column' | 'row';
}

@Component({
  selector: 'rc-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class RcLabelComponent {

  @Input()
  public labelText = '';

  @Input()
  public required = false;

  @Input()
  public displayAsLabel = true;

  @Input()
  public align: RcLabelComponentScope.LabelAlign = 'column';
}
