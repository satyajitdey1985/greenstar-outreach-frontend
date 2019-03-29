import { Component, OnInit, Input } from '@angular/core';
import { GreenstarService } from '../service/greenstar.service';

@Component({
  selector: 'app-greenstar',
  templateUrl: './greenstar.component.html',
  styleUrls: ['./greenstar.component.scss']
})
export class GreenstarComponent implements OnInit {

  MyArrayType = [];
@Input() strokeColor:any;
@Input() paramID:any;
@Input() serialno:any;
@Input() labelText:any;
lblText:any;
slno:any;
  constructor(private greenStarApi : GreenstarService) { 
   
 //this.slno=this.serialno;
  }

  loadStarData() {
    //alert(this.serialno);
   // alert(this.paramID);
   this.slno=this.serialno;
   this.lblText=this.labelText;
   //this.labelText="Decipline";
    this.greenStarApi.getGrrenStar(this.paramID,1).subscribe((data) => {
      
      for (let entry of data) {
       
        let el = document.getElementById(this.slno+'_day'+ entry.day);
        el.setAttribute('fill', entry.colorHexCode);
        //console.log(entry); // 1, "string", false
      }
    })
  }

  // loadStarData() {
  //   this.MyArrayType = [
  //     { day: 1, color: '#FF0000' },
  //     { day: 2, color: '#32CD32' },
  //     { day: 3, color: '#FF0000' },
  //     { day: 4, color: '#32CD32' },
  //     { day: 5, color: '#FF0000' },
  //     { day: 6, color: '#32CD32' },
  //     { day: 7, color: '#FF0000' },
  //     { day: 8, color: '#32CD32' },
  //     { day: 9, color: '#FF0000' },
  //     { day: 10, color: '#32CD32' },
  //     { day: 11, color: '#FF0000' },
  //     { day: 12, color: '#32CD32' },
  //     { day: 13, color: '#FF0000' },
  //     { day: 14, color: '#32CD32' },
  //     { day: 15, color: '#FF0000' },
  //     { day: 16, color: '#32CD32' },
  //     { day: 17, color: '#FF0000' },
  //     { day: 18, color: '#32CD32' },
  //     { day: 19, color: '#FF0000' },
  //     { day: 20, color: '#32CD32' },
  //     { day: 21, color: '#FF0000' },
  //     { day: 22, color: '#32CD32' },
  //     { day: 23, color: '#FF0000' },
  //     { day: 24, color: '#32CD32' },
  //     { day: 25, color: '#FF0000' },
  //     { day: 26, color: '#32CD32' },
  //     { day: 27, color: '#FF0000' },
  //     { day: 28, color: '#32CD32' },
  //     { day: 29, color: '#FF0000' },
  //     { day: 30, color: '#32CD32' },
  //     { day: 31, color: '#32CD32' },
  //   ];
  // }

  fillStar() {
    for (let entry of this.MyArrayType) {
      let el = document.getElementById('day'+ entry.day);
      el.setAttribute('fill', entry.colorHexCode);
      //console.log(entry); // 1, "string", false
    }
  }

  ngOnInit() {
    console.log(this.strokeColor); 
    this.loadStarData();
    ///this.fillStar();
  }
}
