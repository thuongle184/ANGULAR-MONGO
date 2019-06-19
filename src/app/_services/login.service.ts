import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:3000/user';

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

  
  login( userName: string, password: string) {
    
    return this.http.get(`${this.uri}/login/${userName},${password}`);

  }

  logout(): void {
      this.token = null;
      this.user_name = null;
      localStorage.removeItem('currentUser');
      this.isLogged(false);
  }

}
