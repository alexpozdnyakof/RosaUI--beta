import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rosa-hint',
  templateUrl: './hint.component.pug',
  styleUrls: ['./hint.component.scss']
})
export class HintComponent implements OnInit {
  // ----- Default ------- //
  @Input() public state = `state_default`;
  constructor() { }

  ngOnInit() {
  }

}
