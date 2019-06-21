import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserInputForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.createForm();
  }

  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  usernamePattern = "^[A-Za-z0-9]+(?:[.][A-Za-z0-9]+)*$";
  namePattern = "^[a-zA-Z ]+([a-zA-Z ]+){2,}?$";
  passwordPattern ="^(?=.*[a-z].)(?=.*[A-Z].)(?=.*[0-9].)[a-zA-Z0-9.]+$";

  
  createForm() {
    this.addUserInputForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.pattern(this.usernamePattern)] ],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.passwordPattern)] ],
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.pattern(this.namePattern)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.pattern(this.namePattern)] ],
      gmail: ['', [Validators.required, Validators.pattern(this.emailPattern)] ]
    });
  }

  addUserItem(username, password, firstname, lastname, gmail) {
    console.log(this.userService.addUser(username, password, firstname, lastname, gmail))
    if(this.userService.addUser(username, password, firstname, lastname, gmail) == true) {
      alert("User added!");
      this.router.navigate(['user']);
    } else {
      alert('Username exists!')
    }
    
  }

  ngOnInit() {
  }
}
