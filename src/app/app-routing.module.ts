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
import { ListadoComponent } from './components/page/listado/listado.component';
import { MugreComponent } from './components/page/mugre/mugre.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  { path: 'home', component: HomeComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'mugre', component: MugreComponent },
  // { path: '**', component: NotFoundComponent },
  { path: 'juegos', component: JuegosComponent, children: [
    {path: 'mayor-menor', component: MayorMenorComponent },
    {path: 'preguntados', component: PreguntadosComponent },
    {path: '**', component: NotFoundComponent }
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
