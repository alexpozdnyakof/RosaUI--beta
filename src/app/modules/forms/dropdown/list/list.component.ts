import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'rosa-list',
  templateUrl: './list.component.pug',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // ----- Default ------- //
  @Input() public values: any[] = [];
  @Input() public suffix = '';

  // ----- States ------- //
  @Input() public selected: any;
  @Input() public isOpen = false;

  // -----Outputs ------- //
  @Output() sendValue: EventEmitter<String | String[]> = new EventEmitter<String | String[]>();

  public constructor() { }
  public ngOnInit(): void { }

  public setValue(selected: string | string[] ) {
    this.sendValue.emit(selected);
  }

}
