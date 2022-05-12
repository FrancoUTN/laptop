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
  uid:string|undefined;
  
  constructor(
    firestore: AngularFirestore,
    private firestoreService:FirestoreService,
    private authenticationService:AuthenticationService,
    private afAuth:AngularFireAuth) {

      this.coleccion = firestore.collection('estadisticas');
      // this.items = this.coleccion.valueChanges();

      this.afAuth.authState.subscribe(
        (codigo) => this.uid = codigo?.uid
      )
  }

  agregar (uid:string|undefined, estadistica:Estadistica) {
    // this.coleccion.add(estadistica);
    this.coleccion.doc(uid).set(estadistica);
  }

  // setScoreYJuego (juego:string, puntaje:number) {
  //   this.coleccion.doc(this.uid).set({
  //     juego:puntaje
  //   });
  // }
  
  setScoreMayorMenor (puntaje:number) {
    this.coleccion.doc(this.uid).update({
      mayorMenor: puntaje
    });
  }

  setScorePreguntados (puntaje:number) {

    // let document = this.coleccion.doc(this.uid).get();

    // console.log(document);

    this.coleccion.doc(this.uid).update({
      preguntados: puntaje
    });
  }
  
}
