import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { AuthenticationService } from 'src/app/services/authentication.service';
import { ErrorService } from 'src/app/services/error.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  error:string = '';
  authIsLoading: boolean = false;

  constructor(
    private router: Router,
    private authenticationService:AuthenticationService,
    private errorService: ErrorService) {
  }

  ngOnInit(): void {
  }
  
  signUp(value:User) {
    this.error = "";
    this.authIsLoading = true;
    this.authenticationService.SignUp(value.email, value.password)
      .then(() => this.router.navigateByUrl('page/home'))
      .catch(e => {
        this.authIsLoading = false;
        this.error = this.errorService.getFirebaseErrorMsg(e);
      });
  }
  
}
