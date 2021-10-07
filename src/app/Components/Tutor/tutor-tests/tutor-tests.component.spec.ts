import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorTestsComponent } from './tutor-tests.component';

describe('TutorTestsComponent', () => {
  let component: TutorTestsComponent;
  let fixture: ComponentFixture<TutorTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
