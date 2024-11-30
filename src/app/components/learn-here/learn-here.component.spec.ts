import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnHereComponent } from './learn-here.component';

describe('LearnHereComponent', () => {
  let component: LearnHereComponent;
  let fixture: ComponentFixture<LearnHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnHereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
