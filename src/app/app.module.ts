import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './componentes/error/error.component';
import { PersonalComponent } from './componentes/personal/personal.component';
import { PantallaJuegosComponent } from './componentes/pantalla-juegos/pantalla-juegos.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { PptComponent } from './componentes/ppt/ppt.component';
import { AdivinaComponent } from './componentes/adivina/adivina.component';
import { HighscoresComponent } from './componentes/highscores/highscores.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { HttpClientModule } from '@angular/common/http';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { MayormenorComponent } from './componentes/mayormenor/mayormenor.component';
//import { AdivinaComponent } from './componetes/adivina/adivina.component';
//import { PersonalComponent } from './component/personal/personal.component';
//import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    BienvenidosComponent,
    ErrorComponent,
    PersonalComponent,
    PantallaJuegosComponent,
    TatetiComponent,
    PptComponent,
    AdivinaComponent,
    HighscoresComponent,
    NavegadorComponent,
    AhorcadoComponent,
    MayormenorComponent,
    //AdivinaComponent,
    //PersonalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
