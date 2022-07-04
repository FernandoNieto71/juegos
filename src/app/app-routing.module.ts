import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdivinaComponent } from './componentes/adivina/adivina.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { AltaSuscripcionComponent } from './componentes/alta-suscripcion/alta-suscripcion.component';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { ErrorSuscripcionComponent } from './componentes/error-suscripcion/error-suscripcion.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HighscoresComponent } from './componentes/highscores/highscores.component';
import { ListaSuscripcionComponent } from './componentes/lista-suscripcion/lista-suscripcion.component';
import { LoginComponent } from './componentes/login/login.component';
import { MayormenorComponent } from './componentes/mayormenor/mayormenor.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { PantallaJuegosComponent } from './componentes/pantalla-juegos/pantalla-juegos.component';
import { PersonalComponent } from './componentes/personal/personal.component';
import { PptComponent } from './componentes/ppt/ppt.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SusbcripcionComponent } from './componentes/susbcripcion/susbcripcion.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { GuardianPack1Guard } from './guardianes/guardian-pack1.guard';
import { GuardianPack2Guard } from './guardianes/guardian-pack2.guard';
import { GuardianPack3Guard } from './guardianes/guardian-pack3.guard';
import { UsuariologGuard } from './guardianes/usuariolog.guard';

const routes: Routes = [
  { path: '', redirectTo: '/bienvenidos', pathMatch: 'full' },
  { path: 'bienvenidos', component: BienvenidosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'about_me', component: PersonalComponent },
  { path: 'navegador', component: NavegadorComponent },
  {path: 'suscripcion', component:SusbcripcionComponent},
  {path: 'altasuscripcion', component:AltaSuscripcionComponent},
  //{path: 'juegos', component: PantallaJuegosComponent},
  //{path: 'juegos/tateti', component:TatetiComponent},
  //{path: 'juegos/ppt',component:PptComponent},
  /*{
    path: 'juegos',
    component: PantallaJuegosComponent,
    canActivate:[UsuariologGuard],
    children: [
      { path: 'tateti', component: TatetiComponent },
      { path: 'ppt', component: PptComponent },
      { path: 'adivina', component: AdivinaComponent },
      { path: 'highscores', component: HighscoresComponent },
      { path: 'ahorcado', component: AhorcadoComponent },
      { path: 'mayormenor', component:MayormenorComponent}
    ],
  },*/
  { path: 'tateti', component: TatetiComponent,canActivate:[GuardianPack2Guard] },
  { path: 'ppt', component: PptComponent,canActivate:[GuardianPack3Guard] },
  { path: 'adivina', component: AdivinaComponent,canActivate:[GuardianPack2Guard] },
  { path: 'highscores', component: HighscoresComponent },
  { path: 'ahorcado', component: AhorcadoComponent,canActivate:[GuardianPack3Guard] },
  { path: 'mayormenor', component:MayormenorComponent, canActivate:[GuardianPack1Guard]},
  {path: 'errorsuscripcion', component:ErrorSuscripcionComponent},
  {path: 'listasuscripcion', component:ListaSuscripcionComponent},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
