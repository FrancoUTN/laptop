import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
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

  constructor(    
    private router: Router,
    private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }
  
  signIn(value:User) {
    this.authenticationService.SignIn(value.email, value.password)
      .then(() => this.router.navigateByUrl('page/home'))
      .catch(razon => this.error = razon.message);
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