import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AhorcadoComponent } from '../ahorcado/ahorcado.component';
import { MayorMenorComponent } from '../mayor-menor/mayor-menor.component';
import { Pregunta2Component } from '../pregunta2/pregunta2.component';
import { AlcoholComponent } from '../alcohol/alcohol.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'ahorcado', pathMatch: 'full' },
  { path: 'ahorcado', component: AhorcadoComponent },
  { path: 'mayor-menor', component: MayorMenorComponent },
  { path: 'preguntados', component: Pregunta2Component },
  { path: 'alcoholimetro', component: AlcoholComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AhorcadoComponent,
    MayorMenorComponent,
    Pregunta2Component,
    AlcoholComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class JuegosModule { }
