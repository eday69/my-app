import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengersHomeComponent } from './avengers-home.component';

describe('AvengersHomeComponent', () => {
  let component: AvengersHomeComponent;
  let fixture: ComponentFixture<AvengersHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvengersHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvengersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
