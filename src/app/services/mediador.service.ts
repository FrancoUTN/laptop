import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { FirestoreService } from './firestore.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Estadistica } from '../models/Estadistica';

@Injectable({
  providedIn: 'root'
})
export class MediadorService {

  estadistica:Estadistica|undefined;
  uid:string|undefined;

  constructor(
    private firestoreService:FirestoreService,
    private authenticationService:AuthenticationService,
    private afAuth:AngularFireAuth) {
      this.afAuth.authState.subscribe(
        (codigo) => this.uid = codigo?.uid
      )
   }

  crearEstadistica (puntaje:number) {
    this.estadistica = {
      uid: this.uid,
      mayorMenor: puntaje
    };

    this.firestoreService.agregar(this.estadistica);
  }

  agregarEstadistica (item:Estadistica) {
    this.firestoreService.agregar(item)
  }

  subscribir (items:Array<Estadistica>) {    
    this.firestoreService.items.subscribe(
      (a) => items = a
    )
  }
}
