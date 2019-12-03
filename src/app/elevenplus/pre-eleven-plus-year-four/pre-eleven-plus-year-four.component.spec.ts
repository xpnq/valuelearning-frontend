import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreElevenPlusYearFourComponent } from './pre-eleven-plus-year-four.component';

describe('PreElevenPlusYearFourComponent', () => {
  let component: PreElevenPlusYearFourComponent;
  let fixture: ComponentFixture<PreElevenPlusYearFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreElevenPlusYearFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreElevenPlusYearFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
