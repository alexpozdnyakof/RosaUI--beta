import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'rosa-card',
  templateUrl: './card.component.pug',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
  @HostBinding('class.rosa-card')
  get cardType() {
    return true;
  }
  constructor() { }

  ngOnInit() {
  }

}
