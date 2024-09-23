import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeGroupComponent } from './badge-group.component';

describe('BadgeGroupComponent', () => {
  let component: BadgeGroupComponent;
  let fixture: ComponentFixture<BadgeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
