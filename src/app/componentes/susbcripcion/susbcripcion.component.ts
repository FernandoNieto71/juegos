import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { SuscripcionService } from 'src/app/servicio/suscripcion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-susbcripcion',
  templateUrl: './susbcripcion.component.html',
  styleUrls: ['./susbcripcion.component.css'],
})
export class SusbcripcionComponent implements OnInit {
  jugadorActual: Usuario;
  listaSuscripciones = [];
  packbusqueda: boolean;
  tipoBusqueda:any;

  constructor(private servicio: SuscripcionService, private router: Router) {
    this.jugadorActual = new Usuario();
    this.jugadorActual.traeUsuario();
    this.packbusqueda = false;
    /*this.listaSuscripciones=[];
    if (localStorage.getItem('suscripciones') != null) {
      this.listaSuscripciones = JSON.parse(localStorage.getItem('suscripciones'));
      //console.log(JSON.parse(this.listaSuscripciones[0]));
    }*/
    this.listaSuscripciones = this.servicio.get('suscripciones');
  }

  ngOnInit(): void {}

  tateti(): void {
    this.servicio.accesoPack2();
    this.router.navigate(['tateti']);
  }

  ppt(): void {
    this.servicio.accesoPack3();
    this.router.navigate(['ppt']);
  }

  adivina(): void {
    this.servicio.accesoPack2();
    this.router.navigate(['adivina']);
  }

  ahorcado(): void {
    this.servicio.accesoPack3();
    this.router.navigate(['ahorcado']);
  }

  mayMenor(): void {
    this.servicio.accesoPack1();
    this.router.navigate(['mayormenor']);
  }

  buscaPack(tipo: any) {
    this.packbusqueda = true;
    this.tipoBusqueda=tipo;
  }
  buscaUsuario() {
    this.packbusqueda = false;
  }
}
