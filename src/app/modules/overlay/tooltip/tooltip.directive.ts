import { Directive, Input, HostListener, OnInit, ComponentRef, ElementRef, EventEmitter, Output } from '@angular/core';
import { OverlayRef, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { TooltipComponent } from './tooltip/tooltip.component';

@Directive({
  selector: '[rosaTooltip]'
})
export class TooltipDirective implements OnInit {
  private overlayRef: OverlayRef;

  @Input('rosaTooltip') text = ``;

  @HostListener('mouseenter')
  show() {
      // Create tooltip portal
  const tooltipPortal = new ComponentPortal(TooltipComponent);

  // Attach tooltip portal to overlay
  const tooltipRef: ComponentRef<TooltipComponent> = this.overlayRef.attach(tooltipPortal);

  // Pass content to tooltip component instance
  tooltipRef.instance.text = this.text;
  }

  @HostListener('mouseout')
  hide() {
    this.overlayRef.detach();
  }

  constructor(
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private overlay: Overlay) {}

  ngOnInit() {
    const positionStrategy = this.overlayPositionBuilder
    // Create position attached to the elementRef
    .flexibleConnectedTo(this.elementRef)
    // Describe how to connect overlay to the elementRef
    // Means, attach overlay's center bottom point to the
    // top center point of the elementRef.
    .withPositions([{
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom',
    }]);
    this.overlayRef = this.overlay.create({ positionStrategy });
  }

}




