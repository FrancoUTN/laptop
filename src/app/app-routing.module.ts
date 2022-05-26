import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { JuegosComponent } from './components/page/juegos/juegos.component';
import { NotFoundComponent } from './components/page/not-found/not-found.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { HomeComponent } from './components/home/home.component';
import { MayorMenorComponent } from './components/page/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './components/page/preguntados/preguntados.component';
import { MugreComponent } from './components/page/mugre/mugre.component';
import { BienvenidaComponent } from './components/page/bienvenida/bienvenida.component';
import { Pregunta2Component } from './components/page/pregunta2/pregunta2.component';
import { AlcoholComponent } from './components/page/alcohol/alcohol.component';

const routes: Routes = [
  
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'registro', component: RegistroComponent },
  // { path: 'quien-soy', component: QuienSoyComponent },
  // { path: 'home', component: HomeComponent },y
  // { path: 'estadisticas', component: MugreComponent },
  // { path: '**', component: NotFoundComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  { path: 'home', component: HomeComponent, children: [
    {path: '', component: BienvenidaComponent },
    { path: 'quien-soy', component: QuienSoyComponent },
    { path: 'estadisticas', component: MugreComponent },
    {path: '**', component: NotFoundComponent }
  ] },

  { path: 'juegos', component: JuegosComponent, children: [
    {path: 'mayor-menor', component: MayorMenorComponent },
    // {path: 'preguntados', component: PreguntadosComponent },
    {path: 'preguntados', component: Pregunta2Component },
    {path: 'alcohol', component: AlcoholComponent },
    {path: '**', component: NotFoundComponent }
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
