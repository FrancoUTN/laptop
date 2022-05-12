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

    this.coleccion.get().subscribe
    (
      (querySnapshot) => {
        querySnapshot.forEach(
          (doc) => {
            // console.log(doc.id, " => ", doc.data());

            this.estadisticas.push(doc.data());
          }
        )
      }
    );

  }

  consolear() {
    console.log("HOLA");

    // this.items.subscribe(a => console.log(a))

    // this.items.subscribe(
    //   a => this.estadisticas = a
    //   )

    this.coleccion.get().
      subscribe(
        function(querySnapshot) {
          querySnapshot.forEach(
            function(doc) {
              console.log(doc.id, " => ", doc.data());
            }
          )
        }
      );
  }

}
