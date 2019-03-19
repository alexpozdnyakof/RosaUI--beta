import { ButtonState } from './state.model';
import { Component, EventEmitter, OnInit, OnChanges, Output, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rosa-button',
  templateUrl: './button.component.pug',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges {
  // ----- Default ------- //
  @Input() public tabindex = -1;
  @Input() public type = 'button';
  @Input() public button: 'primary' | 'secondary' | 'ghost' | 'black' | 'white' | 'link' = 'primary';
  @Input() public size: 'medium' | 'small' | 'large' | 'inline' = 'medium';
  // ----- Params ------- //
  @Input() public isDisabled = false;
  @Input() public isLoading = false;
  // ----- Outputs ------- //
  @Output() ClickEvent: EventEmitter<any> = new EventEmitter<any>();

  public getButtonType(type = 'primary') {
    switch (type) {
      case 'primary':
        return 'rosa-button__primary';
      case 'secondary':
        return 'rosa-button__secondary';
      case 'ghost':
        return 'rosa-button__ghost';
      case 'black':
        return 'rosa-button__black';
      case 'white':
        return 'rosa-button__white';
      case 'link':
        return 'rosa-button__link';
    }
  }
  public getButtonSize(size = 'medium') {
    switch (size) {
      case 'medium':
        return 'rosa-button__medium';
      case 'small':
        return 'rosa-button__small';
      case 'large':
        return 'rosa-button__large';
      case 'inline':
        return 'rosa-button__inline';
    }
  }
  constructor() { }

  ngOnInit() {
  }
  public ngOnChanges(changes: SimpleChanges) {
  }


}
