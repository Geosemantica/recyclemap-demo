import { Component, Input } from '@angular/core';

@Component({
  selector: 'rc-text-separator',
  templateUrl: './text-separator.component.html',
  styleUrls: ['./text-separator.component.scss']
})
export class RcTextSeparatorComponent {
  @Input()
  public size: 'md' | 'lg' = 'md';
}
