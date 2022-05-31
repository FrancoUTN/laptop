import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { BienvenidaComponent } from '../components/page/bienvenida/bienvenida.component';
import { ChatComponent } from '../components/page/chat/chat.component';
import { MugreComponent } from '../components/page/mugre/mugre.component';
import { NotFoundComponent } from '../components/page/not-found/not-found.component';
import { QuienSoyComponent } from '../components/quien-soy/quien-soy.component';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from '../components/menu/menu.component';
import { AdminGuard } from '../auth/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'home', component: BienvenidaComponent },
    { path: 'quien-soy', component: QuienSoyComponent },
    { path: 'estadisticas', component: MugreComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'juegos', loadChildren: () => import('../components/page/juegos/juegos.module').then(m => m.JuegosModule) },
    { path: '**', component: NotFoundComponent }
  ] },
];

@NgModule({
  declarations: [
    HomeComponent,
    QuienSoyComponent,
    MugreComponent,
    BienvenidaComponent,
    ChatComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})

export class PageModule { }
