import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Matches2Component } from './matches2.component';

describe('Matches2Component', () => {
  let component: Matches2Component;
  let fixture: ComponentFixture<Matches2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Matches2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Matches2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
