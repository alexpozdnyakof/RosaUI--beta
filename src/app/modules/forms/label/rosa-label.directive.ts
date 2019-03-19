import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: 'label[rosaLabel], span[rosaLabel]'
})
export class RosaLabelDirective {
  static readonly SIZE_MEDIUM = 'medium';
  size = `medium`;

  @Input('labelSize')
  set setSize(value: string) {
    this.size = value || 'medium';
  }
  @HostBinding('class.rosa-label')
  label = true;

  @HostBinding('class.rosa-label__m')
  get medium() {
    return this.size === `medium`;
  }
  @HostBinding('class.rosa-label__lg')
  get large() {
    return this.size === `large`;
  }
  constructor() {
  }

}
