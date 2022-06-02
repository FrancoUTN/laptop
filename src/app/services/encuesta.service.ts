import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  coleccion:AngularFirestoreCollection<any>;
  documento:AngularFirestoreDocument<any> | undefined;

  email:string = '';
  uid:string = '';
  
  constructor(
    firestore: AngularFirestore,
    private authenticationService:AuthenticationService) {

      this.coleccion = firestore.collection('respuestas');

      this.authenticationService.getAuthState().subscribe(
        (usuario) => {
          if (usuario && usuario.email) {
              this.email = usuario.email;
              this.uid = usuario.uid;
          }
        }
      );
  }

  agregarRespuesta(respuesta:any) {
    const rta = {
      uid: this.uid,
      email: this.email,
      nombre: respuesta.userData.nombre,
      apellido: respuesta.userData.apellido,
      edad: respuesta.userData.edad,
      telefono: respuesta.userData.tel,
      juego: respuesta.gameData.juego,
      seDivirtio: respuesta.gameData.meGusta,
      comentario: respuesta.gameData.comentario,
    }

    this.coleccion.add(rta);

    return rta;
  }

  retornarColeccion () {
    return this.coleccion;
  }
}
