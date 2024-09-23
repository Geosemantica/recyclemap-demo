import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { MAX_MARKER_FRACTIONS_AMOUNT } from '@app/app.constants';
import { Marker } from '@app/app.models';
import { FractionType } from '@app/shared/api/fractions/models';
import { UserRole } from "@app/shared/api/points/models";

export enum PinTheme {
  ADD = 'add',
  EDIT = 'edit',
}

@Component({
  selector: 'rc-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RcMarkerComponent {
  @Input()
  public marker!: Partial<Marker>;

  @Input()
  public asDraggablePin = false;

  @Input()
  public isActive = false;

  @Input()
  public draggablePinTheme: PinTheme;

  public isPopupHovered = false;

  private readonly digitsAmount = 3;

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this.isPopupHovered = true;
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.isPopupHovered = false;
  }

  public get isConicGradientMarker(): boolean {
    return this.marker.fractions.length > MAX_MARKER_FRACTIONS_AMOUNT;
  }

  public get isDouble(): boolean {
    return this.marker.fractions.length === 2;
  }

  public get isSingle(): boolean {
    return this.marker.fractions.length === 1;
  }

  public get classList(): string {
    return `${this.asDraggablePin ? 'draggable-pin' : ''} ${this.draggablePinTheme} ${this.marker.type.toLowerCase()} ${this.marker.isSmallPin ? 'small-pin' : ''}`;
  }

  public get disabledPinClassList(): string {
    return `${this.marker.disabled && !this.isActive ? 'disabled-pin' : ''} ${
      this.marker.disabled && this.isActive ? 'grey-pin' : ''
    }`;
  }

  public get draggablePinIcon(): string {
    return this.draggablePinTheme === PinTheme.ADD ? 'plus' : 'pen';
  }

  public get smallPinIcon(): string {
    switch (this.marker.type) {
      case FractionType.RC:
        return 'rc-small-pin';
      case FractionType.ZW:
        return 'zw-small-pin';
      default:
        return '';
    }
  }

  /**
   * use to get the space of single slice as percentage
   */
  public get getSlicePercent(): string {
    return (50 * (1 - Math.tan(this.getRad(90 - 360 / this.marker.fractions.length)))).toFixed(this.digitsAmount);
  }

  /**
   * use to get rotation degree for each slice of the pie chart
   * @param sliceAmount
   * @param sliceIndex
   */
  public getRotationDegree(sliceAmount: number, sliceIndex: number): number {
    return (360 / sliceAmount) * sliceIndex;
  }

  /**
   * use to convert degrees to radians
   * @param deg
   * @private
   */
  private getRad(deg: number): number {
    return (deg * Math.PI) / 180;
  }
}
