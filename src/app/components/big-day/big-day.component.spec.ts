import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BigDayComponent } from './big-day.component';

describe('BigDayComponent', () => {
  let component: BigDayComponent;
  let fixture: ComponentFixture<BigDayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BigDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
