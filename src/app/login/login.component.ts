    
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
    if(this.loginService.isLogged){
      
    }
  }

  usernamePattern = "^[A-Za-z0-9]+(?:[.][A-Za-z0-9]+)*$";
  passwordPattern ="^(?=.*[a-z].)(?=.*[A-Z].)(?=.*[0-9].)[a-zA-Z0-9.]+$";

  formGroupUserInput = new FormGroup({ //variables name: the same as in array
    username: new FormControl('' , [Validators.required, Validators.pattern(this.usernamePattern)]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)])
  });

  message: string = "";

  

  checkLogin() {
    console.log(this.formGroupUserInput.value);

    if (this.loginService.login(this.formGroupUserInput.value.username, this.formGroupUserInput.value.password)) {   
      this.router.navigate(['user']);
    } 
    else if (!this.loginService.login(this.formGroupUserInput.value.username, this.formGroupUserInput.value.password)){        
      alert ('Email or password is incorrect');
      
    }
  }
  
}