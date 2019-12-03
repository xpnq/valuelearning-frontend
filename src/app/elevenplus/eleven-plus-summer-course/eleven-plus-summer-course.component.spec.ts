import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevenPlusSummerCourseComponent } from './eleven-plus-summer-course.component';

describe('ElevenPlusSummerCourseComponent', () => {
  let component: ElevenPlusSummerCourseComponent;
  let fixture: ComponentFixture<ElevenPlusSummerCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevenPlusSummerCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevenPlusSummerCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
