import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDetailsComponent } from './group-details.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule,NgbDate } from '@ng-bootstrap/ng-bootstrap';


describe('GroupDetailsComponent', () => {
  let component: GroupDetailsComponent;
  let fixture: ComponentFixture<GroupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDetailsComponent ],
      imports:[FormsModule,HttpClientModule,NgbModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
