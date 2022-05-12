import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';

import { PreguntadosService } from 'src/app/services/preguntados.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss']
})
export class PreguntadosComponent implements OnInit {

  pregunta:string = '';
  respuestas:Array<string> = [];
  questions:Array<Pregunta> = [];
  imagen:string = '';
  correcta:string = ''

  puntaje:number = 0;

  constructor(
    private preguntadosService: PreguntadosService,
    private location: Location) { }

  ngOnInit(): void {
    let jsonPath;
    const url = this.location.path();
    if (url.includes('jsonPath')) {
      jsonPath = url.split('jsonPath=')[1];
    }
    
    this.preguntadosService.getQuestions(jsonPath).subscribe((response) => {
      this.questions = response.items;
      this.generarPreguntaAleatoria();
    });
  }
  
  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  generarPreguntaAleatoria() {
    do {
      let random = this.getRndInteger(0, 2);
      var question = this.questions[random];
    } while (this.pregunta == question.laPregunta)

    this.pregunta = question.laPregunta;
    this.respuestas = question.lasRespuestas;
    this.imagen = question.laImagen;
    this.correcta = question.correcta;
  }

  onRtaClick (respuesta: string) {
    if (respuesta === this.correcta) {
      this.puntaje += 1;
    }
    else if (this.puntaje > 0) {
      this.puntaje -= 1;
    }

    this.generarPreguntaAleatoria();
  }

}
