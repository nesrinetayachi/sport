import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { User.Service1Component } from './user.service1.component';

describe('User.Service1Component', () => {
  let component: User.Service1Component;
  let fixture: ComponentFixture<User.Service1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User.Service1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User.Service1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
