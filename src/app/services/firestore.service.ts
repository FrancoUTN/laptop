import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Estadistica } from '../models/Estadistica';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  coleccion:AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  
  constructor(firestore: AngularFirestore) {
    this.coleccion = firestore.collection('estadisticas');

    this.items = this.coleccion.valueChanges();
  }

  agregar (estadistica:Estadistica) {
    this.coleccion.add(estadistica);
  }
}
