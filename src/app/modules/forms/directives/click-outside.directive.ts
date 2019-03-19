  import { Directive, ElementRef, EventEmitter, Output, HostListener } from '@angular/core';

  @Directive({
    selector: '[rosaClickOutside]'
  })
  export class ClickOutsideDirective {

    constructor(private _elRef: ElementRef) { }

    @Output()
    public clickOutside = new EventEmitter();
    @HostListener('document:click', [`$event.target`])
    public onCLick(targetElement) {
    // console.log(targetElement);
      if (!this._elRef.nativeElement.contains(targetElement)) {
        this.clickOutside.emit(null);
      }
    }

  }
