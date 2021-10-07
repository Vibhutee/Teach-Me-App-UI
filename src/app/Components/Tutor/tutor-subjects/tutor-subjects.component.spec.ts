import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorSubjectsComponent } from './tutor-subjects.component';

describe('TutorSubjectsComponent', () => {
  let component: TutorSubjectsComponent;
  let fixture: ComponentFixture<TutorSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
