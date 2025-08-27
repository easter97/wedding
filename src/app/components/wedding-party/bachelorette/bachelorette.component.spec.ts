import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacheloretteComponent } from './bachelorette.component';

describe('BacheloretteComponent', () => {
  let component: BacheloretteComponent;
  let fixture: ComponentFixture<BacheloretteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BacheloretteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BacheloretteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
