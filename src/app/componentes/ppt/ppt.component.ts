import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css'],
})
export class PptComponent implements OnInit {
  pantallaJugador: boolean;
  pantallaMaquina:boolean;
  jugadorSeleccion: number;
  maquinaSeleccion: any;
  mensajeResultado: string;
  maquinaPuntaje: number;
  jugadorPuntaje: number;
  mensajeFinal: string;
  pantallaFinal: boolean;
  numerorandom: any;

  constructor() {
    this.pantallaJugador = true;
    this.pantallaMaquina = false;
    this.pantallaFinal = false;
    this.mensajeResultado = '';
    this.maquinaPuntaje = 0;
    this.jugadorPuntaje = 0;
    this.mensajeFinal = '';
    //this.numerorandom= Math.floor(Math.random() * 3) +1;
  }

  ngOnInit(): void {}

  jugadorPiedra(): void {
    //this.pantallaJugador = false;
    this.pantallaMaquina = true;
    this.jugadorSeleccion = 1;
    this.maquinaSeleccion= Math.floor(Math.random() * 3) +1;
    this.verificaJugada();
  }
  jugadorPapel(): void {
    //this.pantallaJugador = false;
    this.pantallaMaquina = true;
    this.jugadorSeleccion = 2;
    this.maquinaSeleccion= Math.floor(Math.random() * 3) +1;
    this.verificaJugada();
  }

  jugadorTijera(): void {
    //this.pantallaJugador = false;
    this.pantallaMaquina = true;
    this.jugadorSeleccion = 3;
    this.maquinaSeleccion= Math.floor(Math.random() * 3) +1;
    this.verificaJugada();
  }

  /*
  maquinaPiedra(): void {
    //this.pantalla = true;
    this.maquinaSeleccion = 1;
    this.verificaJugada();
  }
  maquinaPapel(): void {
    //this.pantalla = true;
    this.maquinaSeleccion = 2;
    this.verificaJugada();
  }

  maquinaTijera(): void {
    //this.pantalla = true;
    this.maquinaSeleccion = 3;
    this.verificaJugada();
  }*/

  verificaJugada(): void {
    if (this.maquinaSeleccion == this.jugadorSeleccion) {
      this.mensajeResultado = 'Empate';
    } else {
      switch (this.jugadorSeleccion) {
        case 1:
          if (this.maquinaSeleccion == 2) {
            this.maquinaPuntaje++;
            this.mensajeResultado = 'gano la maquina';
          } else {
            this.jugadorPuntaje++;
            this.mensajeResultado = 'gano el jugador';
          }
          break;
        case 2:
          if (this.maquinaSeleccion == 3) {
            this.maquinaPuntaje++;
            this.mensajeResultado = 'gano la maquina';
          } else {
            this.jugadorPuntaje++;
            this.mensajeResultado = 'gano el jugador';
          }
          break;
        case 3:
          if (this.maquinaSeleccion == 1) {
            this.maquinaPuntaje++;
            this.mensajeResultado = 'gano la maquina';
          } else {
            this.jugadorPuntaje++;
            this.mensajeResultado = 'gano el jugador';
          }
          break;
      }
    }
    //this.pantallaJugador = true;
    //this.pantallaMaquina =  false;
    this.verificaGanador();
  }

  verificaGanador(): void {
    
    if (this.jugadorPuntaje == 3) {
      this.mensajeFinal = 'Gano el jugador';
      this.pantallaJugador = false;
      this.pantallaMaquina= false;
      this.pantallaFinal =  true;
    }
    if (this.maquinaPuntaje == 3) {
      this.mensajeFinal = 'Gano la maquina';
      this.pantallaJugador = false;
      this.pantallaMaquina = false;
      this.pantallaFinal =  true;
    }
  }

  volverJugar():void{
    this.jugadorPuntaje=0;
    this.maquinaPuntaje=0;
    this.pantallaFinal = false;
    this.pantallaJugador = true;
  }
}
