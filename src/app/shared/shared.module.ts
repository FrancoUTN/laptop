import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from '../components/menu/menu.component';
import { NotFoundComponent } from '../components/page/not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotFoundComponent,
    MenuComponent
  ]
})
export class SharedModule { }
