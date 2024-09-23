import { Component, Input } from '@angular/core';

@Component({
  selector: 'rc-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class RcLoaderComponent {
  @Input()
  public size: string;

  @Input()
  public color: string;
}
