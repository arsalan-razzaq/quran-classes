import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCourseComponent } from './first-course.component';

describe('FirstCourseComponent', () => {
  let component: FirstCourseComponent;
  let fixture: ComponentFixture<FirstCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
