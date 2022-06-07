import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NotFoundComponent } from './components/page/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [  
  { path: '', redirectTo: 'page', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'page',
    canActivate: [AuthGuard],
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
