import { Component } from '@angular/core';
import { LoginService } from './_services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-mongo';

  constructor(private router: Router, private loginService: LoginService){

  }

  validateButton() : String{
    console.log(this.loginService.isLogged);
    if(this.loginService.isLogged){
     return "notLogged"; 
     
    }
    else 
    return "isLogged";
  }
 

  logOut(){
   this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
