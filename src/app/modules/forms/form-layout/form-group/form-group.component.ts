import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rosa-form-group',
  templateUrl: './form-group.component.pug',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
  // ----- Default ------- //
  @Input() public size = `size-default`;
  @Input() public layout = `form-group_single`;
  public constructor() { }
  public ngOnInit(): void { }
}
