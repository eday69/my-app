import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengerDisplayComponent } from './avenger-display.component';

describe('AvengerDisplayComponent', () => {
  let component: AvengerDisplayComponent;
  let fixture: ComponentFixture<AvengerDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvengerDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvengerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
