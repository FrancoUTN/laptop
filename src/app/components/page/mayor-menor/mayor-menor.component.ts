import { Component, OnInit } from '@angular/core';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.scss']
})
export class MayorMenorComponent implements OnInit {

  cartaActual:number = 0;
  cartaSiguiente:number = 0;
  puntaje:number = 0;
  halago:string = '';
  halagos:Array<string> = ["Bien!", "Eso!!", "Muy bien!!", "Dale!", "Seguí así!!"];
  recienEmpieza:boolean = true;

  constructor(private scoresService:ScoresService) { }

  ngOnInit(): void {
    this.cartaActual = this.getRndCard();
    this.cartaSiguiente = this.getRndCard();
  }

  getRndCard() {
    return this.getRndInteger(1, 12);
  }

  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  onMayorClick() {
    this.compararCartas(true);
  }

  onMenorClick() {
    this.compararCartas(false);
  }

  compararCartas(diceQueEsMayor:boolean) {
    if (this.recienEmpieza) {
      this.recienEmpieza = false;
    }

    if (diceQueEsMayor == this.verSiEsMayor()) {
      this.puntaje += 1;
      this.halagar();
    }
    else {
      this.puntaje = 0;
    }

    this.renovarCartas();
  }

  verSiEsMayor() {
    return this.cartaSiguiente > this.cartaActual;
  }

  renovarCartas() {
    this.cartaActual = this.cartaSiguiente;

    while(this.cartaSiguiente == this.cartaActual) {      
      this.cartaSiguiente = this.getRndCard();
    }

  }

  halagar() {
    let random = this.getRndInteger(0, 3);

    this.halago = this.halagos[random];
  }

  sendScore () {
    this.scoresService.setScore('mayorMenor', this.puntaje);
  }

}
