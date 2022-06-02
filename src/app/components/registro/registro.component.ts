import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  error:string = '';

  constructor(
    private router: Router,
    private authenticationService:AuthenticationService) {
  }

  ngOnInit(): void {
  }
  
  signUp(value:User) {
    this.authenticationService.SignUp(value.email, value.password)
      .then(() => this.router.navigateByUrl('page/home'))
      .catch(razon => this.error = razon.message);
  }
  
}
