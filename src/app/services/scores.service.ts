import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { FirestoreService } from './firestore.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Estadistica } from '../models/Estadistica';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  coleccion:AngularFirestoreCollection<any>;
  // items: Observable<any[]>;
  uid:string = '';
  email:string = '';
  
  constructor(
    firestore: AngularFirestore,
    private firestoreService:FirestoreService,
    private authenticationService:AuthenticationService,
    private afAuth:AngularFireAuth) {

      this.coleccion = firestore.collection('estadisticas');
      // this.items = this.coleccion.valueChanges();

      this.afAuth.authState.subscribe(
        (codigo) => {
          if (codigo) {            
            if (codigo.email) {
              this.uid = codigo.uid;
              this.email = codigo.email;
            }
            else {
              console.log("El usuario no tiene email.");
            }
          }
          else {
            console.log("No hay usuario.");
          }
        } 
      )
  }

  subscribir (items:Array<Estadistica>) {    
    this.firestoreService.items.subscribe(
      (a) => items = a
    )
  }

  retornarColeccion () {
    return this.coleccion;
  }

  agregar (uid:string|undefined, estadistica:Estadistica) {
    // this.coleccion.add(estadistica);
    this.coleccion.doc(uid).set(estadistica);
  }

  // setScore (juego:string, puntaje:number) {
  //   this.coleccion.doc(this.uid).set({
  //     juego:puntaje
  //   });
  // }
  
  setScoreMayorMenor (puntaje:number) {      
    this.coleccion.doc(this.uid).get().subscribe(
      (document) => {
        if (document.exists) {
          this.coleccion.doc(this.uid).update({
            email: this.email,
            mayorMenor: puntaje
          });
        }
        else {
          this.coleccion.doc(this.uid).set({
            email: this.email,
            mayorMenor: puntaje
          });
        }
      }
    )
  }

  setScorePreguntados (puntaje:number) {
    this.coleccion.doc(this.uid).update({
      email: this.email,
      preguntados: puntaje
    });

    this.coleccion.doc(this.uid).get().subscribe(
      (document) => {
        if (document.exists) {
          this.coleccion.doc(this.uid).update({
            email: this.email,
            preguntados: puntaje
          });
        }
        else {
          this.coleccion.doc(this.uid).set({
            email: this.email,
      preguntados: puntaje
          });
        }
      }
    )
  }
  
}
