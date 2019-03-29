import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: any = {};
  public errMsg:boolean=false;
  constructor(public api: LoginService,private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.api.login(this.loginForm).subscribe((data) => {
      if (data) {
        this.router.navigate(['/dashboard']);
      }
      else{
        this.errMsg=true;
      }
     
    }, err =>{
      console.log(err);
      this.errMsg=true;
    })

  }
}
