import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependentSchoolsComponent } from './independent-schools.component';

describe('IndependentSchoolsComponent', () => {
  let component: IndependentSchoolsComponent;
  let fixture: ComponentFixture<IndependentSchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndependentSchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndependentSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
