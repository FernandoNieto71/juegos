import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdivinaComponent } from './componentes/adivina/adivina.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HighscoresComponent } from './componentes/highscores/highscores.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { PantallaJuegosComponent } from './componentes/pantalla-juegos/pantalla-juegos.component';
import { PersonalComponent } from './componentes/personal/personal.component';
import { PptComponent } from './componentes/ppt/ppt.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';

const routes: Routes = [
  { path: '', redirectTo: '/bienvenidos', pathMatch: 'full' },
  { path: 'bienvenidos', component: BienvenidosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'about_me', component: PersonalComponent },
  { path: 'navegador', component: NavegadorComponent },
  //{path: 'juegos', component: PantallaJuegosComponent},
  //{path: 'juegos/tateti', component:TatetiComponent},
  //{path: 'juegos/ppt',component:PptComponent},
  {
    path: 'juegos',
    component: PantallaJuegosComponent,
    children: [
      { path: 'tateti', component: TatetiComponent },
      { path: 'ppt', component: PptComponent },
      { path: 'adivina', component: AdivinaComponent },
      { path: 'highscores', component: HighscoresComponent },
      { path: 'ahorcado', component: AhorcadoComponent },
    ],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
