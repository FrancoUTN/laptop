import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { JuegosComponent } from './components/page/juegos/juegos.component';
import { NotFoundComponent } from './components/page/not-found/not-found.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  { path: 'home', component: HomeComponent },
  // { path: '**', component: NotFoundComponent },
  { path: 'juegos', component: JuegosComponent, children: [
    {path: '**', component: NotFoundComponent }
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
