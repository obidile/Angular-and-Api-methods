import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnFormComponent } from './own-form.component';

describe('OwnFormComponent', () => {
  let component: OwnFormComponent;
  let fixture: ComponentFixture<OwnFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
