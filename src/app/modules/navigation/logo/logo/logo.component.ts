import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rosa-logo',
  templateUrl: './logo.component.pug',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() public path: string;
  constructor() { }

  ngOnInit() {
  }

}
