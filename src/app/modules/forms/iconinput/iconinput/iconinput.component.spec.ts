import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconinputComponent } from './iconinput.component';

describe('IconinputComponent', () => {
  let component: IconinputComponent;
  let fixture: ComponentFixture<IconinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
