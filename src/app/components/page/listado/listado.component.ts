import { Component, OnInit } from '@angular/core';
import { MediadorService } from 'src/app/services/mediador.service';
import { Estadistica } from '../../../models/Estadistica';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  listado:Array<Estadistica> = [];
  coleccion:any;
  
  // mockEstadistica:Estadistica = {
  //   uid: "wersdf",
  //   mayorMenor: 5
  // }

  constructor(
    private mediadorService:MediadorService,
    private scoresService:ScoresService
  ) { }

  ngOnInit(): void {
  }

  // traerLista() {
  //   this.mediadorService.subscribir(this.listado);
  // }
  
  // traerLista() {
  //   this.scoresService.subscribir(this.listado);
  // }

  traerColeccion() {
    this.coleccion = this.scoresService.retornarColeccion();

    // let algo = this.coleccion.get();


    
    // console.log(algo);
  }
  
  // getMarker() {
  //   const snapshot = await this.coleccion.get().then(
  //     (a) => console.log(a);
  //   );
// }

}
