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
      // this.coleccion = firestore.collection('mensajes');
      this.coleccion = firestore.collection('mensajes', ref => ref.orderBy("hora"));

      this.authenticationService.getAuthState().subscribe(
        (usuario) => {
          if (usuario && usuario.email) {
              this.email = usuario.email;
              this.uid = usuario.uid;
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
