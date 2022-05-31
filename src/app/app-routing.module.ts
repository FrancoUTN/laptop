import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NotFoundComponent } from './components/page/not-found/not-found.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { HomeComponent } from './components/home/home.component';
import { MugreComponent } from './components/page/mugre/mugre.component';
import { BienvenidaComponent } from './components/page/bienvenida/bienvenida.component';
import { ChatComponent } from './components/page/chat/chat.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  { path: 'page', component: HomeComponent, children: [
    { path: 'home', component: BienvenidaComponent },
    { path: 'quien-soy', component: QuienSoyComponent },
    { path: 'estadisticas', component: MugreComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'juegos', loadChildren: () => import('./components/page/juegos/juegos.module').then(m => m.JuegosModule) },
    { path: '**', component: NotFoundComponent }
  ] },

  {path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
