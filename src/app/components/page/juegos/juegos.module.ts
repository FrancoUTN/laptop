import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { JuegosComponent } from './juegos.component';
import { AhorcadoComponent } from '../ahorcado/ahorcado.component';
import { MayorMenorComponent } from '../mayor-menor/mayor-menor.component';
import { Pregunta2Component } from '../pregunta2/pregunta2.component';
import { AlcoholComponent } from '../alcohol/alcohol.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { MenuComponent } from '../../menu/menu.component';

const routes: Routes = [
  { path: '', component: JuegosComponent, children: [
    {path: 'ahorcado', component: AhorcadoComponent },
    {path: 'mayor-menor', component: MayorMenorComponent },
    {path: 'preguntados', component: Pregunta2Component },
    {path: 'alcoholimetro', component: AlcoholComponent },
    {path: '**', component: NotFoundComponent }
  ] },
];

@NgModule({
  declarations: [
    JuegosComponent,
    AhorcadoComponent,
    MayorMenorComponent,
    Pregunta2Component,
    AlcoholComponent,
    NotFoundComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class JuegosModule { }
