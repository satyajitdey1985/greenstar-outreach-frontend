import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenstarComponent } from './greenstar.component';

describe('GreenstarComponent', () => {
  let component: GreenstarComponent;
  let fixture: ComponentFixture<GreenstarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenstarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
