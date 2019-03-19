import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rosa-tooltip',
  templateUrl: './tooltip.component.pug',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @Input() text = ``;
  constructor() { }

  ngOnInit() {
  }

}
