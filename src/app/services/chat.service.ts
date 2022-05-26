import { getLocaleDateTimeFormat } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  coleccion:AngularFirestoreCollection<any>;
  documento:AngularFirestoreDocument<any> | undefined;

  email:string = '';
  uid:string = '';
  
  constructor(
    firestore: AngularFirestore,
    private authenticationService:AuthenticationService) {

      this.coleccion = firestore.collection('mensajes');

      this.authenticationService.getAuthState().subscribe(
        (codigo) => {
          if (codigo) {
            if (codigo.email) {
              this.email = codigo.email;
              this.uid = codigo.uid;
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

  agregarMensaje(text:string) {
    const mensaje = {
      uid: this.uid,
      email: this.email,
      texto: text,
      hora: Date()
    }

    this.coleccion.add(mensaje);

    return mensaje;
  }

  retornarColeccion () {
    return this.coleccion;
  }

}
