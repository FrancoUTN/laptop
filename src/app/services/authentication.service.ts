import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  
  constructor(private angularFireAuth: AngularFireAuth) {
  }
  
  /* Sign up */
  SignUp(email: string, password: string) {

    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.createUserWithEmailAndPassword(email, password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }
  
  /* Sign in */
  SignIn(email: string, password: string) {
    
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.signInWithEmailAndPassword(email, password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }
  
  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .signOut();
  }

}