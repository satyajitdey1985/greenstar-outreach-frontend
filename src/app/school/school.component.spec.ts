import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolComponent } from './school.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
describe('SchoolComponent', () => {
  let component: SchoolComponent;
  let fixture: ComponentFixture<SchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolComponent ],
      imports:[FormsModule,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
