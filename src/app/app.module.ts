import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MayorMenorComponent } from './components/page/mayor-menor/mayor-menor.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { JuegosComponent } from './components/page/juegos/juegos.component';
import { NotFoundComponent } from './components/page/not-found/not-found.component';
import { PreguntadosComponent } from './components/page/preguntados/preguntados.component';
import { AhorcadoComponent } from './components/page/ahorcado/ahorcado.component';
import { ListadoComponent } from './components/page/listado/listado.component';
import { MenuComponent } from './components/menu/menu.component';
import { MugreComponent } from './components/page/mugre/mugre.component';
import { BienvenidaComponent } from './components/page/bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    MayorMenorComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    QuienSoyComponent,
    JuegosComponent,
    NotFoundComponent,
    PreguntadosComponent,
    AhorcadoComponent,
    ListadoComponent,
    MenuComponent,
    MugreComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
