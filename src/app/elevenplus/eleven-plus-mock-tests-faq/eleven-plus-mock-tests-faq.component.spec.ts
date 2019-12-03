import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevenPlusMockTestsFaqComponent } from './eleven-plus-mock-tests-faq.component';

describe('ElevenPlusMockTestsFaqComponent', () => {
  let component: ElevenPlusMockTestsFaqComponent;
  let fixture: ComponentFixture<ElevenPlusMockTestsFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevenPlusMockTestsFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevenPlusMockTestsFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
