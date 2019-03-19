import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rosa-select',
  templateUrl: './select.component.pug',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() public value = 'Выберите';
  @Input() public className = 'default';
  @Input() public isDisabled = false;
  @Input() public isOpen = false;
  @Input() public suffix: string;
  @Input() public size = 'size_m';
  @Output() ClickEvent: EventEmitter<any> = new EventEmitter<any>();
  public active = false;
  constructor() { }

  ngOnInit() {
  }
  public toggleDropdown(): void {
    this.ClickEvent.emit('true');
  }
}

