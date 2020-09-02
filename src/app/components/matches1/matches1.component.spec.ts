import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Matches1Component } from './matches1.component';

describe('Matches1Component', () => {
  let component: Matches1Component;
  let fixture: ComponentFixture<Matches1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Matches1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Matches1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
