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
  
  user: any = {};
  updateUserInputForm: FormGroup;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.editUser(params['id']).subscribe(res => {
        this.user = res;
    });
  });
  }

  createForm() {
    this.updateUserInputForm = this.fb.group({
      username: ['', ],
      password: ['', ],
      firstname: ['', ],
      lastname: ['', ],
      gmail: ['', ]
    });
  }

  updateUserItem(username, password, firstname, lastname, gmail) {
    this.route.params.subscribe(params => {
       this.userService.updateUser(username, password, firstname, lastname, gmail, params['id']);
        alert("User Updated")
       this.router.navigate(['user']);
  });}
}
