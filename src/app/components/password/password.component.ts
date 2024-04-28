import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { NgForm } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  fade=false;
  loginUserData: User = {password: '' };
  
  @ViewChild('f') form : NgForm;
  constructor(private _auth: AuthService, private router: Router) {}
  ngOnInit() {}

  loginUser() {
    if (
      this.loginUserData.password == environment.password
    ) {
      console.log('login success');
      localStorage.setItem('token', environment.secretToken);
      this.fade=true;
      this.router.navigate(['/home']);
    }
    else{
      console.log('wrong')
      this.form.controls.password.setErrors({'incorrect': true});
    }
    console.log('enter')
  }
}

export interface User {
  password: string;
}