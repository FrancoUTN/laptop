import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  listado:Array<any> = [];

  constructor(
    private firestoreService:FirestoreService
  ) { }

  ngOnInit(): void {
    this.firestoreService.items.subscribe(
      (a) => this.listado = a
    )
  }

  

}
