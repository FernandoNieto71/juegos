import { Component, OnInit } from '@angular/core';
import { SuscripcionService } from 'src/app/servicio/suscripcion.service';
import { Usuario } from 'src/app/clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-suscripcion',
  templateUrl: './lista-suscripcion.component.html',
  styleUrls: ['./lista-suscripcion.component.css'],
})
export class ListaSuscripcionComponent implements OnInit {
  jugadorActual: Usuario;
  listaSuscripciones = [];
  packbusqueda: boolean;
  tipoBusqueda: any;
  solonombre: boolean;
  nombreBuscado: string;
  listadoxnombre: boolean;

  constructor(private servicio: SuscripcionService, private router: Router) {
    this.jugadorActual = new Usuario();
    this.jugadorActual.traeUsuario();
    this.packbusqueda = false;
    this.solonombre = false;
    this.nombreBuscado = '';
    this.listadoxnombre = false;
    /*this.li  staSuscripciones=[];
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
    this.tipoBusqueda = tipo;
  }
  buscaUsuario() {
    this.packbusqueda = false;
  }

  listaxnombre() {
    this.solonombre = true;
  }

  listaxnombre2() {
    this.solonombre = false;
    this.listadoxnombre = false;
  }

  buscarxnombre() {
    this.listadoxnombre = true;
  }
}
