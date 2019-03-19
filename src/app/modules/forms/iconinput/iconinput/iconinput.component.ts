import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rosa-iconinput',
  templateUrl: './iconinput.component.pug',
  styleUrls: ['./iconinput.component.scss']
})
export class IconinputComponent implements OnInit {
  @Input() public icon = `calendar`;
  @Input() public position = `left`;
  public iconPositionClass: string;
  constructor() { }

  ngOnInit() {
    this.iconPositionClass = this.getPosition(this.position);
  }
  public getPosition(position: string): string {
    switch (position) {
        case `left`:
          return `icon__left`;
        case `right`:
          return `icon__right`;
    }
  }
  public getIcon(value): boolean {
    return this.icon === value;
  }

}
