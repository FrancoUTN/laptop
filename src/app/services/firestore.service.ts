import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

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

  agregar (item:any) {
    this.coleccion.add(item);
  }

  traerColeccion () {
    
  }
}
