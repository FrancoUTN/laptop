import { Component } from '@angular/core';
import { EncuestaService } from 'src/app/services/encuesta.service';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.scss']
})
export class RespuestasComponent {

  respuestas:Array<any> = [];
  
  constructor(private encuestaService:EncuestaService) {
    const coleccion = encuestaService.retornarColeccion();

    coleccion.get().subscribe(
      (qs) => {
        qs.forEach(
          (doc) => this.respuestas.push({id: doc.id, ...doc.data()})
        );
      }
    );
  }
}
