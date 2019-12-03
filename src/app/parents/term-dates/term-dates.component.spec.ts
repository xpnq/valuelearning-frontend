import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermDatesComponent } from './term-dates.component';

describe('TermDatesComponent', () => {
  let component: TermDatesComponent;
  let fixture: ComponentFixture<TermDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
