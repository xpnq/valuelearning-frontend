import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevenplusComponent } from './elevenplus.component';

describe('ElevenplusComponent', () => {
  let component: ElevenplusComponent;
  let fixture: ComponentFixture<ElevenplusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevenplusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevenplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
