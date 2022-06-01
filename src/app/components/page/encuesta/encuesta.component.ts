import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  constructor() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        'edad': new FormControl(null, [Validators.required, Validators.min(18), Validators.max(99)]),
        'tel': new FormControl(null, [Validators.required, Validators.min(18), Validators.max(99)])
      }),
      'gender': new FormControl('male')
    });
    
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }

  ngOnInit() {
  }

  get username() { return this.signupForm.get('userData.username'); }
  get genero() { return this.signupForm.get('gender'); }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }
}
