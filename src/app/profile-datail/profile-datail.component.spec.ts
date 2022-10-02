import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDatailComponent } from './profile-datail.component';

describe('ProfileDatailComponent', () => {
  let component: ProfileDatailComponent;
  let fixture: ComponentFixture<ProfileDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDatailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
