import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcseMathsTuitionComponent } from './gcse-maths-tuition.component';

describe('GcseMathsTuitionComponent', () => {
  let component: GcseMathsTuitionComponent;
  let fixture: ComponentFixture<GcseMathsTuitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcseMathsTuitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcseMathsTuitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
