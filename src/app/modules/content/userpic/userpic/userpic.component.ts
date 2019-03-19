import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rosa-userpic',
  templateUrl: './userpic.component.pug',
  styleUrls: ['./userpic.component.scss']
})
export class UserpicComponent implements OnInit {
  @Input() public userpic;
  constructor() { }

  ngOnInit() {
  }

}
