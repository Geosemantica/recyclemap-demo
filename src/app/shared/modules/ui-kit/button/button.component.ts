import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HelperService } from '@app/shared/services/helper.service';
import { BaseButtonComponent } from '@app/shared/modules/ui-kit/button/base-button.component';
import { Size } from '@app/shared/modules/ui-kit/button/button.models';

@Component({
  selector: '[rcButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class RcButtonComponent extends BaseButtonComponent implements OnInit, OnChanges {
  @Input()
  public loading: boolean;

  @Input()
  public size: Size = 'md';

  @Input()
  public disabled: boolean;

  public override get classList(): string {
    return `${this.theme} ${this.size} ${this.disabled ? 'disabled' : ''} ${this.prefixIcon ? 'smaller-left-padding' : ''}`;
  }

  constructor(private readonly helperService: HelperService, private readonly element: ElementRef) {
    super();
  }

  @HostListener('mousedown')
  public onMouseDown(): void {
    if (this.disabled) {
      return;
    }

    switch (this.theme) {
      case 'secondary-grey':
      case 'tertiary-grey':
        this.iconColor = this.helperService.readScssProperty('--neutrals-grey-500');
        break;

      case 'secondary':
      case 'tertiary-green':
        this.iconColor = this.helperService.readScssProperty('--brand-primary-green-darker');
        break;
    }
  }

  @HostListener('mouseup')
  public onMouseUp(): void {
    if (this.disabled) {
      return;
    }

    switch (this.theme) {
      case 'secondary-grey':
      case 'tertiary-grey':
        this.iconColor = this.helperService.readScssProperty('--neutrals-grey-400');
        break;

      case 'secondary':
      case 'tertiary-green':
        this.iconColor = this.helperService.readScssProperty('--brand-primary-green');
        break;
    }
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    this.setIconSize();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['disabled']) {
      this.updateDisabledState();
    }
  }

  public onClick(event: Event): void {
    if (!(this.disabled || this.loading)) {
      return;
    }

    event.stopPropagation();
    event.preventDefault();
  }

  private updateDisabledState(): void {
    if ('disabled' in this.element.nativeElement) {
      this.element.nativeElement.disabled = this.disabled;
    }
  }

  protected setIconColor(): void {
    switch (this.theme) {
      case 'secondary-grey':
      case 'tertiary-grey':
        this.iconColor = this.helperService.readScssProperty('--neutrals-grey-400');
        break;

      case 'secondary':
      case 'tertiary-green':
        this.iconColor = this.helperService.readScssProperty('--brand-primary-green');
        break;

      case 'secondary-error':
        this.iconColor = this.helperService.readScssProperty('--status-error');
        break;

      case 'secondary-success':
        this.iconColor = this.helperService.readScssProperty('--status-success');
        break;

      default:
        this.iconColor = this.helperService.readScssProperty('--neutrals-white');
    }
  }

  protected setIconSize(): void {
    switch (this.size) {
      case 'xs':
        this.iconSize = 'xs';
        break;
      case 'sm':
      case 'md':
      case 'lg':
        this.iconSize = 'sm';
        break;
      case 'xl':
        this.iconSize = 'md';
        break;
    }
  }
}
