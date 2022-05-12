import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/page/listado/listado.component';

const routes: Routes = [
  { path: '', redirectTo: 'listado', pathMatch: 'full' },
  { path: 'listado', component: ListadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
