import { Component, OnInit } from '@angular/core';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {

  LETRAS:Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                          'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 
                          'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  PALABRAS:Array<string> = [
    'SEÑUELO', 'ILUSIONES', 'PANTALLA', 'DESPEDIDA', 'FERROCARRIL', 'MANZANA', 'PERGAMINO',
    'INVITADO', 'SALUD', 'TRABAJO', 'PAN', 'FLORES', 'CIRCO', 'BOHEMIO', 'GIRASOLES', 'MENDIGO'
  ];

  palabra:string = '';
  arrayOriginal:Array<string> = [];
  arrayActual:Array<string> = [];
  letras:Array<string> = [];
  vidas:number = 0;
  juegoTerminado:boolean = false;
  puntaje:number = 0;

  constructor(private scoresService:ScoresService) { }

  ngOnInit(): void {
    this.reiniciar();
  }

  reiniciar() {
    const indice = this.getRndInteger(0, this.PALABRAS.length - 1);
    this.palabra = this.PALABRAS[indice];
    this.arrayOriginal = this.palabra.split("");
    this.arrayActual = [];
    this.arrayActual.length = this.arrayOriginal.length;
    this.letras = [...this.LETRAS];
    this.vidas = 10;
    this.juegoTerminado = false;
  }

  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  onTeclaClick(caracter:string) {
    let adivino:boolean = false;

    for (let i = 0; i < this.arrayOriginal.length; i++) {
      if (caracter === this.arrayOriginal[i]) {
        this.arrayActual[i] = caracter;
        adivino = true;
      }
    }

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
      if (this.vidas === 0) {
        this.juegoTerminado = true;
        this.puntaje--;
      }
    }
    else if (this.arrayActual.join("") === this.palabra) {
      this.juegoTerminado = true;
      this.puntaje++;
    }
  }
  
  sendScore () {
    this.scoresService.setScore('ahorcado', this.puntaje);
  }

}
