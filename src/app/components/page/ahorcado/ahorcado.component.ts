import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {

  palabra:string = '';

  arrayOriginal:Array<string> = [];
  arrayAdivinado:Array<string> = [];
  arrayActual:Array<string> = [];

  letras:Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                          'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 
                          'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  // letra:string = '';

  vidas:number = 7;
  win:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.palabra = "H";
    this.arrayOriginal = this.palabra.split("");
    this.arrayActual.length = this.arrayOriginal.length;
  }

  // comparar() {
  //   this.arrayAdivinado = this.arrayOriginal.filter(
  //     elemento => {
  //       return elemento === this.letra
  //     }
  //   )
  // }

  // compararDetalle(texto:string) {

  // }

  onTeclaClick(caracter:string) {
    // this.letra = caracter;
    let adivino:boolean = false;

    for (let i = 0; i < this.arrayOriginal.length; i++) {
      if (caracter === this.arrayOriginal[i]) {
        this.arrayActual[i] = caracter;
        adivino = true;
      }
    }

    // this.letras = this.letras.filter(letra => letra !== caracter);

    this.letras = this.letras.map(
      letra => {
        let aux = letra;

        if (letra === caracter) {
            aux = '';
        }

        return aux;
      }
    );

    if (!adivino) {
      this.vidas--;
    }
    else if (this.arrayActual.join("") === this.palabra) {
      this.win = true;
    }
  }

  onReiniciarClick() {

  }

}
