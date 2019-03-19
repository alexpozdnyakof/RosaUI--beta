import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: 'input[rosaInput], textarea[rosaInput]'
})
export class RosainputDirective {
  static readonly SIZE_MEDIUM = 'medium';
  _size = `medium`;

  @Input('fieldSize')
  set setSize(value: string) {
    this._size = value;
  }

  @HostBinding('class.rosa-input')
  get medium() {
    return this._size === `medium`;
  }

  @HostBinding('class.rosa-textarea')
  get textarea() {
    return this._size === `textarea`;
  }
  constructor() {
  }

}
