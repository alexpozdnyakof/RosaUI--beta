import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SidebarButtonComponent } from '../../sidebar-button/sidebar-button/sidebar-button.component';

@Component({
  selector: 'rosa-sidebar-item',
  templateUrl: './sidebar-item.component.pug',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit, AfterViewInit {
  @ViewChild(SidebarButtonComponent) public button: SidebarButtonComponent;
  @ViewChild('subItems') public subItems: ElementRef;

  public hasSubItems = false;
  constructor() { }

  ngOnInit() {
  }
  public ngAfterViewInit(): void {
    if (this.button) {
      console.log(this.button);
    }
    if (this.subItems.nativeElement.childElementCount > 0) {
      this.hasSubItems = true;
      console.log(this.hasSubItems);
    }
  }
 // public checkSubElements(subContainer: HTMLInputElement)
}
