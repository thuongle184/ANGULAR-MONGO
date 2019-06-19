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

  loadData() {
    console.log('Load data from database');
    this.userService.getUsers().subscribe((data: user[]) => {
      this.users = data;
      console.log(this.users);
      console.log(data);
  });
  }

  deleteUserItem(_id) {
      this.userService.deleteUser(_id).subscribe(res => {
        console.log('User Deleted');
        this.loadData();
      });
    }
}
