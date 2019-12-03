import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevenPlusYearFiveComponent } from './eleven-plus-year-five.component';

describe('ElevenPlusYearFiveComponent', () => {
  let component: ElevenPlusYearFiveComponent;
  let fixture: ComponentFixture<ElevenPlusYearFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevenPlusYearFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevenPlusYearFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
