import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ks2StasCourseComponent } from './ks2-stas-course.component';

describe('Ks2StasCourseComponent', () => {
  let component: Ks2StasCourseComponent;
  let fixture: ComponentFixture<Ks2StasCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ks2StasCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ks2StasCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
