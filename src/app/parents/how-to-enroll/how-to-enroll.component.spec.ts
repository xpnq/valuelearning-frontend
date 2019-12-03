import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToEnrollComponent } from './how-to-enroll.component';

describe('HowToEnrollComponent', () => {
  let component: HowToEnrollComponent;
  let fixture: ComponentFixture<HowToEnrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToEnrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
