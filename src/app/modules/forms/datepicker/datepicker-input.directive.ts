import { Directive, Input, HostListener, OnInit, ComponentRef, ElementRef, Output, EventEmitter } from '@angular/core';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { OverlayRef, Overlay, OverlayPositionBuilder, ScrollStrategyOptions, ScrollStrategy } from '@angular/cdk/overlay';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[rosaDatepickerInput]'
})
export class DatepickerInputDirective implements OnInit {
  public isActive = false;
  private overlayRef: OverlayRef;
  private scrollStrategy: ScrollStrategy;
  public datepickerRef: ComponentRef<DatepickerComponent>;
  @Output() setValue: EventEmitter<string> = new EventEmitter();

  // private componentRef: ComponentRef<DatepickerComponent>;


  @HostListener('click')
  show() {
  if (this.overlayRef.hasAttached()) {
     return this.overlayRef.detach();
  }
  const datepickerPortal = new ComponentPortal(DatepickerComponent);
  this.datepickerRef = this.overlayRef.attach(datepickerPortal);
    this.datepickerRef.instance.selected.subscribe(data => {
      this.control.control.setValue(data);
      // this._elementRef.nativeElement.value = data;
      console.log(data);
      this.overlayRef.detach();
    });
  }


  @HostListener('blur')
  hide() {
    if (this.overlayRef.hasAttached()) {
    // return this.overlayRef.detach();
    }
  }


  @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            // this.clickOutside.emit(null);
        }
    }

  constructor(
    private overlayPositionBuilder: OverlayPositionBuilder,
    private _elementRef: ElementRef,
    private overlay: Overlay,
    private scrollStrategyOpt: ScrollStrategyOptions,
    private control: NgControl
  ) {
    this.scrollStrategy = this.scrollStrategyOpt.block();
  }
  ngOnInit() {

    const positionStrategy = this.overlayPositionBuilder
    // Create position attached to the elementRef
    .flexibleConnectedTo(this._elementRef)
    // Describe how to connect overlay to the elementRef
    // Means, attach overlay's center bottom point to the
    // top center point of the elementRef.
    .withViewportMargin(16)
    .withLockedPosition()
    .withPositions([
      {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      },
      {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      },
      {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      },
      {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
      }
    ]);
    this.overlayRef = this.overlay.create({ positionStrategy: positionStrategy, scrollStrategy: this.scrollStrategy  });
  }
}
