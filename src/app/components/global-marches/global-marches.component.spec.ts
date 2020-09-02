import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalMarchesComponent } from './global-marches.component';

describe('GlobalMarchesComponent', () => {
  let component: GlobalMarchesComponent;
  let fixture: ComponentFixture<GlobalMarchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalMarchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalMarchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
