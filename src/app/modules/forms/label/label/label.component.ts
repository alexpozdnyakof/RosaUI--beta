import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rosa-label',
  templateUrl: './label.component.pug',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  // ----- Default ------- //
  @Input() public disabled = false;
  // ----- TODO: link with form element through ID ------- //
  @Input() public linked: any = ``;

  public constructor() { }

  public ngOnInit(): void { }
}
