import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Estadistica } from '../../../models/Estadistica';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  listado:Array<Estadistica> = [];
  
  mockEstadistica:Estadistica = {
    uid: "wersdf",
    mayorMenor: 5
  }

  constructor(
    private firestoreService:FirestoreService
  ) { }

  ngOnInit(): void {
    this.firestoreService.items.subscribe(
      (a) => this.listado = a
    )
  }

  verEnConsola () {
    console.log(this.listado);
  }

  modificar () {
    this.firestoreService.agregar(this.mockEstadistica)
  }
  

}
