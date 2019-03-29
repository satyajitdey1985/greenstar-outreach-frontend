import { Component, OnInit } from '@angular/core';
import { HolidayCalendarService } from "../service/holiday-calendar.service";
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource, MatSort } from '@angular/material';
import { NgbModal, NgbDateStruct, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-holiday-calendar',
  templateUrl: './holiday-calendar.component.html',
  styleUrls: ['./holiday-calendar.component.scss']
})
export class HolidayCalendarComponent implements OnInit {
  holidays: any = [];
  holidayForm = {};
  // public displayedColumns = ['holidayDate', 'holidayName'];
  // public dataSource = new MatTableDataSource();
  closeResult: string;
  constructor(public api: HolidayCalendarService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getHolidays();
  }

  getHolidays() {
    this.holidays = [];
    this.api.getHolidays().subscribe((data) => {
      this.holidays = data;
      //this.dataSource.data = data;
    })
  }
  deleteHoliday(id) {
    if (confirm("Do you want to delete?")) {
      this.api.deleteHoliday(id).subscribe((data) => {
        this.getHolidays();
      })
    }
  }
  saveOrUpdateHoliday(holidayData) {
    if (!holidayData.holidayID) {
      this.api.addHoliday(holidayData).subscribe((data) => { })
    }
    else {
      this.api.updateHoliday(holidayData.id, holidayData).subscribe((data) => { })
    }
    this.holidayForm = {};
    this.modalService.dismissAll();
  }
  open(content, data) {
    if (data)
      this.holidayForm = data;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
