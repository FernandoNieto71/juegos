import { getLocaleDateFormat } from '@angular/common';
import { Usuario } from './usuario';

export class Jugadores {
  nombre: string;
  mail: string;
  puntaje: number;
  fechaHora: any;
  juego: number;
  nombreJuego: string;
  listaJugadores: any;

  constructor() {
    this.fechaHora = getLocaleDateFormat;
  }

  setNombre(nombre: any) {
    this.nombre = nombre;
  }
  setMail(mail: any) {
    this.mail = mail;
  }

  setNombrejuego(juego: string){
    this.nombreJuego = juego;
  }

  guardaScore(): void {
    //window.alert('aca entro');
    var scoreJugador = [];
    if (localStorage.getItem('scoreJugador') == null) {
      //window.alert('verdadero'); //si queres saca la alerta despues de probar como funciona
      scoreJugador = [];
    } else {
      //window.alert('sino');
      scoreJugador = JSON.parse(localStorage.getItem('scoreJugador'));
    }
    scoreJugador.push({
      nombre: this.nombre,
      mail: this.mail,
      juego: this.juego,
      nombreJuego: this.nombreJuego,
      puntaje: this.puntaje,
      fecha: this.fechaHora,
    });
    //scoreJugador.push({ puntaje: this.puntaje, fecha: this.fechaHora});

    localStorage.setItem('scoreJugador', JSON.stringify(scoreJugador));
  }

  traeScores(): void {
    if (localStorage.getItem('scoreJugador') != null) {
      this.listaJugadores = JSON.parse(localStorage.getItem('scoreJugador'));
      console.log(JSON.parse(this.listaJugadores));
    }
  }
}
