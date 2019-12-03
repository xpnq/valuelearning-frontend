import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ks3MathYears7to9Component } from './ks3-math-years7to9.component';

describe('Ks3MathYears7to9Component', () => {
  let component: Ks3MathYears7to9Component;
  let fixture: ComponentFixture<Ks3MathYears7to9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ks3MathYears7to9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ks3MathYears7to9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
