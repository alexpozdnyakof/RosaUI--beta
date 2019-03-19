import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rosa-dropdown',
  templateUrl: './dropdown.component.pug',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  // ----- Default ------- //
  @Input() public value = `Выберите`;
  @Input() public placeholder = '';
  @Input() public tabindex = -1;
  // ----- States ------- //
  @Input() public size = `size-default`;
  @Input() public state = `state_default`;
  @Input() public isDisabled = false;
  @Input() public isOpen = false;
  // ----- Modificator ------- //
  @Input() public suffix = '';
  // ----- Outputs ------- //
  @Output() ClickEvent: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  // ----- Inner Logic ------- //
  public active = false;
  constructor() { }

  ngOnInit() {
  }

  public toggleDropdown(e): void {
    this.ClickEvent.emit(true);
  }
}
