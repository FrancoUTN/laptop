import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { AuthenticationService } from 'src/app/services/authentication.service';
import { ErrorService } from 'src/app/services/error.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:string = '';
  atrEmail:string = '';
  atrPassword:string = '';
  authIsLoading: boolean = false;

  constructor(    
    private router: Router,
    private authenticationService: AuthenticationService,
    private errorService: ErrorService) { }

  ngOnInit(): void {
  }
  
  signIn(value:User) {
    this.error = "";
    this.authIsLoading = true;
    this.authenticationService.SignIn(value.email, value.password)
      .then(() => this.router.navigateByUrl('page/home'))
      .catch(e => {
        this.authIsLoading = false;
        this.error = this.errorService.getFirebaseErrorMsg(e);
      });
  }

  rellenar() {
    this.atrEmail = 'usuario@valido.com';
    this.atrPassword = '123456';
  }

  rellenarAdmin() {
    this.atrEmail = 'administrador@valido.com';
    this.atrPassword = '123456';
  }
}