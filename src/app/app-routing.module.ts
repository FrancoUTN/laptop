import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { JuegosComponent } from './components/page/juegos/juegos.component';
import { NotFoundComponent } from './components/page/not-found/not-found.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { HomeComponent } from './components/home/home.component';
import { MayorMenorComponent } from './components/page/mayor-menor/mayor-menor.component';
import { MugreComponent } from './components/page/mugre/mugre.component';
import { BienvenidaComponent } from './components/page/bienvenida/bienvenida.component';
import { Pregunta2Component } from './components/page/pregunta2/pregunta2.component';
import { AlcoholComponent } from './components/page/alcohol/alcohol.component';
import { ChatComponent } from './components/page/chat/chat.component';
import { AhorcadoComponent } from './components/page/ahorcado/ahorcado.component';

const routes: Routes = [  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  { path: 'home', component: HomeComponent, children: [
    {path: '', component: BienvenidaComponent },
    { path: 'quien-soy', component: QuienSoyComponent },
    { path: 'estadisticas', component: MugreComponent },
    { path: 'chat', component: ChatComponent },
    {path: '**', component: NotFoundComponent }
  ] },

  { path: 'juegos', component: JuegosComponent, children: [
    {path: 'ahorcado', component: AhorcadoComponent },
    {path: 'mayor-menor', component: MayorMenorComponent },
    {path: 'preguntados', component: Pregunta2Component },
    {path: 'alcoholimetro', component: AlcoholComponent },
    {path: '**', component: NotFoundComponent }
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
