import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'rosa-sidebar-link',
  templateUrl: './sidebar-link.component.pug',
  styleUrls: ['./sidebar-link.component.scss']
})
export class SidebarLinkComponent implements OnInit {
  @Output() ClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() public isActive = false;
  constructor() { }

  ngOnInit() {
  }

}
