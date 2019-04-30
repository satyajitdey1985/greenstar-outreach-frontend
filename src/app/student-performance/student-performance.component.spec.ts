import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPerformanceComponent } from './student-performance.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
describe('StudentPerformanceComponent', () => {
  let component: StudentPerformanceComponent;
  let fixture: ComponentFixture<StudentPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPerformanceComponent ],
      imports:[FormsModule,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
