import { Component, Input } from '@angular/core';

@Component({
  selector: 'rc-label-description',
  templateUrl: './label-description.component.html',
  styleUrls: ['./label-description.component.scss'],
})
export class RcLabelDescriptionComponent {
  @Input()
  public notRequired = false;
}
