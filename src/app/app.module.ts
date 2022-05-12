import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
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
    AhorcadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
