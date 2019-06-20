import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:3000/userLogin';

  constructor(private http: HttpClient) { 
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;

    if ( this.token ) {
      this._isLoggedIn = true;
      this.user_name = currentUser.username;
      console.log(currentUser.username);
    }
  }

  public _isLoggedIn = false;
  public token: string;
  public user_name = '';
  
  
  isLogged(message: boolean): boolean {
    return this._isLoggedIn = message;
    
  }

  
  login( userName: string, password: string): boolean {

    console.log(userName, password);
    if( this.http.post(`${this.url}/login`, {userName, password})  
    .subscribe(res => console.log('User found!')) ) {
      this.token = 'I am the admin';
      this.user_name = userName;
      localStorage.setItem('currentUser', JSON.stringify({ username: userName, token: this.token }));
      this.isLogged(true);  
      return true;
    } 
    else {
      
      return false;
    }
  }

  logout(): void {
    this.token = null;
    this.user_name = null;
    localStorage.removeItem('currentUser');
    this.isLogged(false);
  }
}
