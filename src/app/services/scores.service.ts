import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Estadistica } from '../models/Estadistica';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  coleccion:AngularFirestoreCollection<any>;
  documento:AngularFirestoreDocument<any> | undefined;
  
  constructor(
    firestore: AngularFirestore,
    private authenticationService:AuthenticationService) {

      this.coleccion = firestore.collection('estadisticas');

      this.authenticationService.getAuthState().subscribe(
        (codigo) => {
          if (codigo) {
            if (codigo.email) {
              this.documento = this.coleccion.doc(codigo.uid);

              this.documento.get().subscribe(
                document => {
                  if (!document.exists) {
                    this.coleccion.doc(codigo.uid).set(
                      {email: codigo.email}
                    );
                  }
                }
              );
            }
            else {
              console.log("El usuario no tiene email.");
            }
          }
          else {
            console.log("No hay usuario.");
          }
        } 
      );
  }

  retornarColeccion () {
    return this.coleccion;
  }

  setScore (juego:string, puntaje:number) {
    if (this.documento) {
      this.documento.update({
        [juego]: puntaje
      });
    }
  }
}
