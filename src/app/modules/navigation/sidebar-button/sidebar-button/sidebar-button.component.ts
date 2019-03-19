import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rosa-sidebar-button',
  templateUrl: './sidebar-button.component.pug',
  styleUrls: ['./sidebar-button.component.scss']
})
export class SidebarButtonComponent implements OnInit, AfterViewInit {
  @Output() ClickEvent: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('subItems') public subItems: ElementRef;
  public hasSubItems = false;
  constructor() { }

  public ngOnInit(): void {

  }

  public ngAfterViewInit(): void {
  /*  if (this.subItems.nativeElement.childElementCount !== 0) {
      this.hasSubItems = true;
      console.log(`has subitems`);
    }
  */
}
}
