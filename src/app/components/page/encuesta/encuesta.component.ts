import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { EncuestaService } from 'src/app/services/encuesta.service';

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

  constructor(private encuestaService:EncuestaService) { }

  ngOnInit() {
    this.encuestaForm = new FormGroup({
      'userData': new FormGroup({
        'nombre': new FormControl(null, [Validators.required, this.emptyValidator]),
        'apellido': new FormControl(null, [Validators.required, this.emptyValidator]),
        'edad': new FormControl(null, [Validators.required, Validators.min(18), Validators.max(99)]),
        'tel': new FormControl(null, [Validators.required, Validators.max(9999999999)])
      }),
      'gameData': new FormGroup({
        'juego': new FormControl(null, [Validators.required]),
        'meGusta': new FormControl(false), // Igual guarda null
        'comentario': new FormControl(null, [Validators.required, this.emptyValidator])
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
  
  emptyValidator(control: AbstractControl): object | null {
    const valor = control.value;

    if (valor) {
      if (valor.trim().length === 0) {
        return { emptyField: true};
      };
    };

    return null;
  }

  onSubmit() {
    console.log(this.encuestaForm.value);
    this.encuestaService.agregarRespuesta(this.encuestaForm.value);
    this.encuestaForm.reset();
  }
}
