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
    //console.log(message);
    return this._isLoggedIn = message;
    
  }

   flag : boolean = false ;
  login( userName: string, password: string): boolean {
    console.log(userName, password);
    this.http.post(`${this.url}/login`, {userName, password})  
    .subscribe(res =>  {
      console.log(res)
      if(res == true) {
        this.token = 'I am the admin';
        this.user_name = userName;
        localStorage.setItem('currentUser', JSON.stringify({ username: userName, token: this.token }));
        this.isLogged(true);  
        return this.flag = true;
      } 
      else if(res === false){    
        return this.flag = false;
      }
    });
    return this.flag;
  } 

  logout(): void {
    this.token = null;
    this.user_name = null;
    localStorage.removeItem('currentUser');
    this.isLogged(false);
  }
}
