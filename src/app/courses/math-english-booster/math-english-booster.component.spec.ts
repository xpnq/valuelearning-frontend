import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathEnglishBoosterComponent } from './math-english-booster.component';

describe('MathEnglishBoosterComponent', () => {
  let component: MathEnglishBoosterComponent;
  let fixture: ComponentFixture<MathEnglishBoosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathEnglishBoosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathEnglishBoosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
