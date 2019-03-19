import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: 'select[rosaSelect]'
})
export class RosaselectDirective {
  static readonly SIZE_MEDIUM = 'medium';
  size = `medium`;
  @HostBinding('class.rosa-select')
  get medium() {
    return this.size === `medium`;
  }

  constructor() {
  }

}

