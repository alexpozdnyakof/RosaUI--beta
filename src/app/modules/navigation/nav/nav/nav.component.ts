import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rosa-nav',
  templateUrl: './nav.component.pug',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() public link: string;
  constructor() { }

  ngOnInit() {
  }

}
