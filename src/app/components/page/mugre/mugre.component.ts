import { Component } from '@angular/core';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'app-mugre',
  templateUrl: './mugre.component.html',
  styleUrls: ['./mugre.component.scss']
})
export class MugreComponent {
  estadisticas:Array<any> = [];
  
  constructor(scoresService:ScoresService) {
    const coleccion = scoresService.retornarColeccion();

    coleccion.get().subscribe(
      (qs) => {
        qs.forEach(
          (doc) => this.estadisticas.push({id: doc.id, ...doc.data()})
        );
      }
    );
  }
}
