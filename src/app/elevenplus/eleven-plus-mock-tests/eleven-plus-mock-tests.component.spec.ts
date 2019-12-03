import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevenPlusMockTestsComponent } from './eleven-plus-mock-tests.component';

describe('ElevenPlusMockTestsComponent', () => {
  let component: ElevenPlusMockTestsComponent;
  let fixture: ComponentFixture<ElevenPlusMockTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevenPlusMockTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevenPlusMockTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
