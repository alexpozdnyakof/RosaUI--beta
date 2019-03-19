import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableCreateComponent } from './datatable-create.component';

describe('DatatableCreateComponent', () => {
  let component: DatatableCreateComponent;
  let fixture: ComponentFixture<DatatableCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
