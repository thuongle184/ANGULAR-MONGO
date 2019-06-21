import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  constructor(private userService: UserService, private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router, ) {
    this.createForm();
   }
  
   emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  usernamePattern = "^[A-Za-z0-9]+(?:[.][A-Za-z0-9]+)*$";
  namePattern = "^[a-zA-Z ]+([a-zA-Z ]+){2,}?$";
  passwordPattern ="^(?=.*[a-z].)(?=.*[A-Z].)(?=.*[0-9].)[a-zA-Z0-9.]+$";


  user: any = {};
  updateUserInputForm: FormGroup;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.editUser(params['id']).subscribe(res => {
        this.user = res;
    });

    this.checkForm(this.updateUserInputForm);
  });
  }

  createForm() {
    this.updateUserInputForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.pattern(this.usernamePattern)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.passwordPattern)] ],
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.pattern(this.namePattern)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.pattern(this.namePattern)]],
      gmail: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
    });
  }

  checkForm(tempForm: FormGroup) {
    tempForm.disable();
  }
  public buttonTitle: string = 'Update';
  public pageTitle: string = 'Use Detailed Information';

  updateUserItem(username, password, firstname, lastname, gmail){
    
    if (this.buttonTitle=="Save") {
      this.buttonTitle = "Update";
      this.route.params.subscribe(params => {
        this.userService.updateUser(username, password, firstname, lastname, gmail, params['id']);
         alert("User Updated")
        this.router.navigate(['user']);
        console.log('2', this.buttonTitle);
   });
    } 
    else {
      this.buttonTitle = "Save";
      console.log('3', this.buttonTitle); 
      this.updateUserInputForm.enable();
    }
  }

}
