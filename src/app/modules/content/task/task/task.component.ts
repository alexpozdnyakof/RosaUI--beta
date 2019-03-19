import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rosa-task',
  templateUrl: './task.component.pug',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() public title = `Описание`;
  @Input() public description: string;
  @Input() public userpic: string;
  @Input() public duedate: string;
  constructor() { }

  ngOnInit() {
  }

}
