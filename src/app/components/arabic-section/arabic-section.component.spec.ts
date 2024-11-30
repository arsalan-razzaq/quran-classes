import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicSectionComponent } from './arabic-section.component';

describe('ArabicSectionComponent', () => {
  let component: ArabicSectionComponent;
  let fixture: ComponentFixture<ArabicSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArabicSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArabicSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
