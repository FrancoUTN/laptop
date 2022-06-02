import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {
  juegos = [
    'Ahorcado',
    'Mayor o Menor',
    'Preguntados',
    'Alcoholímetro'
  ];
  encuestaForm: FormGroup | any;

  constructor() { }

  ngOnInit() {
    this.encuestaForm = new FormGroup({
      'userData': new FormGroup({
        'nombre': new FormControl(null, [Validators.required]),
        'apellido': new FormControl(null, [Validators.required]),
        'edad': new FormControl(null, [Validators.required, Validators.min(18), Validators.max(99)]),
        'tel': new FormControl(null, [Validators.required, Validators.max(9999999999)])
      }),
      'gameData': new FormGroup({
        'juego': new FormControl(null, [Validators.required]),
        'meGusta': new FormControl(false),
        'comentario': new FormControl(null, [Validators.required])
      })
    });
  }

  get nombre() { return this.encuestaForm.get('userData.nombre'); }
  get apellido() { return this.encuestaForm.get('userData.apellido'); }
  get edad() { return this.encuestaForm.get('userData.edad'); }
  get tel() { return this.encuestaForm.get('userData.tel'); }

  get juego() { return this.encuestaForm.get('gameData.juego'); }
  get meGusta() { return this.encuestaForm.get('gameData.meGusta'); }
  get comentario() { return this.encuestaForm.get('gameData.comentario'); }

  onSubmit() {
    console.log(this.encuestaForm.value);
    this.encuestaForm.reset();
  }
}
