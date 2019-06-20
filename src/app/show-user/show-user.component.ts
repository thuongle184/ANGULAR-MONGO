import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import user from '../user';


@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadData();
  }

  users: user[];
  userItem : user;

  loadData() {
    console.log('Load data from database');
    this.userService.getUsers().subscribe((data: user[]) => {
      this.users = data;
      console.log(this.users);
  });
  }

  deleteUserItem(_id) {
      this.userService.deleteUser(_id).subscribe(res => {
        alert('User Deleted');
        console.log('User Deleted');
        this.loadData();
      });
    }

  open(_id){
    this.userService.getUserById(_id).subscribe((userDetail: user) => {
      this.userItem = userDetail;
      console.log(this.userItem);
  });;
  }
}
