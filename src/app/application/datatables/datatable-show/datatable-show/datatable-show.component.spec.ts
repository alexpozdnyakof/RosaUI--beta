import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableShowComponent } from './datatable-show.component';

describe('DatatableShowComponent', () => {
  let component: DatatableShowComponent;
  let fixture: ComponentFixture<DatatableShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
