import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBodyCellComponent } from './list-body-cell.component';

describe('ListBodyCellComponent', () => {
  let component: ListBodyCellComponent;
  let fixture: ComponentFixture<ListBodyCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBodyCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBodyCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
