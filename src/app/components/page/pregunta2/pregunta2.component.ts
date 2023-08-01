import { Component, OnInit } from '@angular/core';
import { Pregunta2Service } from 'src/app/services/pregunta2.service';
import { ScoresService } from 'src/app/services/scores.service';


@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.scss']
})
export class Pregunta2Component implements OnInit {
  respuestas:Array<string> = [];
  imagen:string = '';
  correcta:string = '';
  puntaje:number = 0;
  adivino:boolean = false;
  recienEmpieza:boolean = true;
  firstImageIsLoading:boolean = true;
  imageIsLoading:boolean = true;

  constructor(
    private pregunta2Service:Pregunta2Service,
    private scoresService:ScoresService) { }

  ngOnInit(): void {
    this.generar();
  }

  generar () {
    this.respuestas = [];
    this.imageIsLoading = true;

    const aleatorio = this.getRndInteger(0, 3);

    for (let i = 0; i < 4; i++) {
      this.pregunta2Service.getRandomCocktail().subscribe(response => {
        const trago = response.drinks[0];

        if (i === aleatorio) {
          this.correcta = trago.strDrink;
          this.imagen = trago.strDrinkThumb;

          this.respuestas.push(this.correcta);
        }
        else {
          this.respuestas.push(response.drinks[0].strDrink);
        }
      });
    }
  }

  setImageLoaded() {
    if (this.firstImageIsLoading) {
      this.firstImageIsLoading = false;
    }
    this.imageIsLoading = false;
  }

  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  onRtaClick (respuesta: string) {
    if (this.recienEmpieza) {
      this.recienEmpieza = false;
    }

    if (respuesta === this.correcta) {
      this.puntaje += 1;
      this.adivino = true;
    }
    else if (this.puntaje > 0) {
      this.puntaje -= 1;
      this.adivino = false;
    }

    this.generar();
  }
  
  sendScore () {
    this.scoresService.setScore('preguntados', this.puntaje);
  }
}
