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

  encuestaForm: FormGroup;

  constructor() {
    this.encuestaForm = new FormGroup({
      'userData': new FormGroup({
        'nombre': new FormControl(null, [Validators.required]),
        'apellido': new FormControl(null, [Validators.required]),
        'edad': new FormControl(null, [Validators.required, Validators.min(18), Validators.max(99)]),
        'tel': new FormControl(null, [Validators.required, Validators.min(18), Validators.max(99)])
      }),
      'gameData': new FormGroup({
        'juego': new FormControl(null, [Validators.required])
      })
    });
    
    this.encuestaForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }

  ngOnInit() {
  }

  get nombre() { return this.encuestaForm.get('userData.nombre'); }
  get apellido() { return this.encuestaForm.get('userData.apellido'); }
  get edad() { return this.encuestaForm.get('userData.edad'); }
  get tel() { return this.encuestaForm.get('userData.tel'); }

  get juego() { return this.encuestaForm.get('gameData.juego'); }

  onSubmit() {
    console.log(this.encuestaForm);
    this.encuestaForm.reset();
  }
}
