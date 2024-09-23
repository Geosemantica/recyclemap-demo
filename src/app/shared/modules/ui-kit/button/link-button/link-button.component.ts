import { Component, HostListener, Input, OnInit } from '@angular/core';
import { HelperService } from '@app/shared/services/helper.service';
import { BaseTheme, Size } from '@app/shared/modules/ui-kit/button/button.models';
import { BaseButtonComponent } from '@app/shared/modules/ui-kit/button/base-button.component';

@Component({
  selector: '[rcLinkButton]',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss']
})
export class RcLinkButtonComponent extends BaseButtonComponent implements OnInit {
  @Input()
  public override theme: BaseTheme = 'primary';

  public override iconSize: Size = 'sm';

  constructor(private readonly helperService: HelperService) {
    super();
  }

  @HostListener('mousedown')
  public onMouseDown(): void {
    switch (this.theme) {
      case 'primary':
        this.iconColor = this.helperService.readScssProperty('--brand-primary-green-darker');
        break;

      case 'secondary':
        this.iconColor = this.helperService.readScssProperty('--neutrals-grey-500');
        break;
    }
  }

  @HostListener('mouseup')
  public onMouseUp(): void {
    switch (this.theme) {
      case 'primary':
        this.iconColor = this.helperService.readScssProperty('--brand-primary-green');

        break;

      case 'secondary':
        this.iconColor = this.helperService.readScssProperty('--neutrals-grey-400');
        break;
    }
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    this.setIconColor();
  }

  protected setIconColor(): void {
    switch (this.theme) {
      case 'primary':
        this.iconColor = this.helperService.readScssProperty('--brand-primary-green');
        break;

      case 'secondary':
        this.iconColor = this.helperService.readScssProperty('--neutrals-grey-400');
        break;
    }
  }
  protected setIconSize(): void {}
}
