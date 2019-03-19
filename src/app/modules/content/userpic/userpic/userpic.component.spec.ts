import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpicComponent } from './userpic.component';

describe('UserpicComponent', () => {
  let component: UserpicComponent;
  let fixture: ComponentFixture<UserpicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
