import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public samplePagesCollapsed = true;
  public userDetails;
  constructor() { 
    this.userDetails=JSON.parse(localStorage.getItem("isLoggedin"));
    console.log(this.userDetails);
  }

  ngOnInit() {
  }

}
