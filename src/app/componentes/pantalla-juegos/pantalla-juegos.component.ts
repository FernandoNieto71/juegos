import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-pantalla-juegos',
  templateUrl: './pantalla-juegos.component.html',
  styleUrls: ['./pantalla-juegos.component.css'],
})
export class PantallaJuegosComponent implements OnInit {
  jugadorActual: Usuario;
  jugado: number;
  valorAPasar: any;
  constructor() {
    this.jugadorActual = new Usuario();
    this.jugadorActual.traeUsuario();
    //this.valorAPasar={nombre: this.jugadorActual.nombre, mail: this.jugadorActual.mail};
  }

  ngOnInit(): void {}

  selectojuego(numero: number): void {
    switch (numero) {
      case 1: {
        this.jugado = 1;
        break;
      }
      case 2: {
        this.jugado = 2;
        //this.valorAPasar={nombre: this.jugadorActual.nombre, mail: this.jugadorActual.mail, juego: '3'};
        break;
      }
      case 3: {
        this.jugado = 3;
        //this.valorAPasar={nombre: this.jugadorActual.nombre, mail: this.jugadorActual.mail, juego: '3'};
        break;
      }
      case 4:
        this.jugado = 4;
        break;
      case 5:
        this.jugado = 5;
        break;
    }
    this.valorAPasar = {
      nombre: this.jugadorActual.nombre,
      mail: this.jugadorActual.mail,
      juego: this.jugado,
    };
  }
}
