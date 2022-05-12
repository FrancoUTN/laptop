import { Component, OnInit } from '@angular/core';
import { MediadorService } from 'src/app/services/mediador.service';
import { Estadistica } from '../../../models/Estadistica';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  listado:Array<Estadistica> = [];
  
  // mockEstadistica:Estadistica = {
  //   uid: "wersdf",
  //   mayorMenor: 5
  // }

  constructor(
    private mediadorService:MediadorService
  ) { }

  ngOnInit(): void {
  }

  traerLista() {
    this.mediadorService.subscribir(this.listado);
  }
  

}
