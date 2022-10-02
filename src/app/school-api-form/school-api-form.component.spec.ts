import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolApiFormComponent } from './school-api-form.component';

describe('SchoolApiFormComponent', () => {
  let component: SchoolApiFormComponent;
  let fixture: ComponentFixture<SchoolApiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolApiFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolApiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
