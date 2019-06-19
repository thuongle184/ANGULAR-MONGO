import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  addUser(username, password, firstname, lastname, gmail) {
    const newUser = {
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      gmail: gmail
    };

    console.log(newUser);
    this.http.post(`${this.uri}/add`, newUser)
        .subscribe(res => console.log('User added'));
  }

  getUsers() {
    return this.http.get(`${this.uri}`);
  }

  deleteUser(_id) {
    return this.http.get(`${this.uri}/delete/${_id}`);
  }

  editUser(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
    }

  updateUser(username, password, firstname, lastname, gmail, _id) {

    const editedUser = {
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      gmail: gmail
      };
    this.http.post(`${this.uri}/update/${_id}`, editedUser)
        .subscribe(res => console.log('User updated!'));
  }
}
