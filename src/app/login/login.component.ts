    
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService){

  }

  error = '';

  ngOnInit() {
  }

  formGroupUserInput = new FormGroup({ //variables name: the same as in array
    username: new FormControl('' , Validators.required),
    password: new FormControl('', Validators.required)
  });

  message: string = "";

  checkLogin() {
    console.log(this.formGroupUserInput.value);
    if (this.loginService.login(this.formGroupUserInput.value.username, this.formGroupUserInput.value.password) ) {
      console.log(this.loginService.login(this.formGroupUserInput.value.username, this.formGroupUserInput.value.password));
        this.router.navigate(['user']);
    } else {     
       alert ('Email or password is incorrect');
    }
  }
  
}