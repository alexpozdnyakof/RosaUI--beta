import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'rosa-board',
  templateUrl: './board.component.pug',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public backlog = [
    {
      description: `[READ ME] - Instructions for using this template`,
      duedate: `2019-12-02`,
      userpic: `/assets/userpic/01.jpg`,
      title: `Description`,
    },
    {
      description: `[EXAMPLE TASK] Interview customers to have them tell their stories on the blog`,
      duedate: `2019-12-02`,
      userpic: `/assets/userpic/01.jpg`,
      title: `Description`,
    },
    {
      description: `[EXAMPLE TASK] Should we highlight training material in the app to help users who are confused?`,
      duedate: `2019-12-02`,
      userpic: `/assets/userpic/01.jpg`,
      title: `Description`,
    }
  ];
  public completed = [
    {
      description: `[EXAMPLE TASK] Prepare swag to give out at conference`,
      duedate: `2019-12-02`,
      userpic: `/assets/userpic/01.jpg`,
      title: `Description`,
    },
    {
      description: `Should we highlight training material in the app to help users who are confused?`,
      duedate: `2019-12-02`,
      userpic: `/assets/userpic/01.jpg`,
      title: `Description`,
    },
    {
      description: `Instructions for using this template`,
      duedate: `2019-12-02`,
      userpic: `/assets/userpic/01.jpg`,
      title: `Description`,
    }
  ];
  public blocked = [
    {
      description: `[READ ME] - Instructions for using this template`,
      duedate: `2019-12-02`,
      userpic: `/assets/userpic/01.jpg`,
      title: `Description`,
    },
    {
      description: `[EXAMPLE TASK] Interview customers to have them tell their stories on the blog`,
      duedate: `2019-12-02`,
      userpic: `/assets/userpic/01.jpg`,
      title: `Description`,
    },
    {
      description: `[EXAMPLE TASK] Should we highlight training material in the app to help users who are confused?`,
      duedate: `2019-12-02`,
      userpic: `/assets/userpic/01.jpg`,
      title: `Description`,
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
}
