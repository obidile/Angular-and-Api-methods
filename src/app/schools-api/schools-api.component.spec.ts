import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsApiComponent } from './schools-api.component';

describe('SchoolsApiComponent', () => {
  let component: SchoolsApiComponent;
  let fixture: ComponentFixture<SchoolsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolsApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
