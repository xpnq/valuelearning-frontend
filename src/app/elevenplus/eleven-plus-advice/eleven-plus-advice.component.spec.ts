import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevenPlusAdviceComponent } from './eleven-plus-advice.component';

describe('ElevenPlusAdviceComponent', () => {
  let component: ElevenPlusAdviceComponent;
  let fixture: ComponentFixture<ElevenPlusAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevenPlusAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevenPlusAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
