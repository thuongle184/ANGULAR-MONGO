import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './_services/user.service';
import { HttpClientModule} from '@angular/common/http';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ShowUserComponent,
    EditUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
