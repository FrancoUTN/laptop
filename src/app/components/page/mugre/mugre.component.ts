import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mugre',
  templateUrl: './mugre.component.html',
  styleUrls: ['./mugre.component.scss']
})
export class MugreComponent {

  coleccion:AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  estadisticas:Array<any> = [];
  
  constructor(firestore: AngularFirestore) {
    this.coleccion = firestore.collection('estadisticas');

    this.items = this.coleccion.valueChanges();
  }

  obtenerEstadisticas() {
    this.coleccion.get().subscribe(
      (qs) => {
        qs.forEach(
          (doc) => this.estadisticas.push({id: doc.id, ...doc.data()})
        );

        console.log(this.estadisticas);
      }
    );
  }

}
