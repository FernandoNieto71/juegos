import { Component, Input, OnInit } from '@angular/core';
//import { stringify } from 'querystring';
import { Router, NavigationEnd } from '@angular/router';
import { Jugadores } from 'src/app/clases/jugadores';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css'],
})
export class AdivinaComponent implements OnInit {
  @Input() datosAPasar: any;

  aleatorio: any;
  salir: boolean;
  numero: number;
  vector: string[] = [];
  contador: number;
  menorMayor: boolean;
  igualNum: boolean;
  mostrarJugando: boolean;
  jugadornuevo: Jugadores;
  jugadorActual: Usuario;

  constructor() {
    this.aleatorio = Math.floor(Math.random() * 101);
    this.numero = 0;
    this.salir = false;
    this.contador = 1;
    this.menorMayor = false;
    this.igualNum = false;
    this.mostrarJugando = false;
    this.jugadornuevo = new Jugadores();
    //this.jugadorActual.traeUsuario();
  }

  ngOnInit(): void {}

  probar(): any {
    window.alert('aleatorio: ' + this.aleatorio + ', numero: ' + this.numero);
    var a: string = String(this.numero);
    if (this.contador > 1) {
      this.vector.push(' - ');
    }
    this.vector.push(a);
    if (this.aleatorio == this.numero) {
      //window.alert('adivino, muy bien');
      //this.leyenda = "Has adivinado!!!";
      this.igualNum = true;
      //this.jugador.miUsuario=JSON.parse(localStorage.getItem('users'));
      let dato: string;
      //dato=this.jugadorActual.nombre;
      dato = this.datosAPasar.nombre;
      this.jugadornuevo.setNombre(dato);
      //dato=this.jugadornuevo.mail;
      dato = this.datosAPasar.mail;
      this.jugadornuevo.setMail(dato);
      this.jugadornuevo.juego = this.datosAPasar.juego;
      this.jugadornuevo.setNombrejuego('Adivina');
      this.jugadornuevo.puntaje = this.contador;
      var fecha = new Date();
      this.jugadornuevo.fechaHora = fecha.toLocaleDateString();
      this.jugadornuevo.guardaScore();
    } else {
      this.contador++;
      if (this.aleatorio > this.numero) {
        //window.alert("numero menor");
        //this.leyenda = "El numero es menor al buscado";
        this.menorMayor = true;
      } else {
        //window.alert("numero mayor");
        //this.leyenda = "El numero es mayor al buscado";
        this.menorMayor = false;
      }
    }
  }

  inicio(): any {
    this.mostrarJugando = true;
    //this.vector=[];
  }

  salirJuego(): void {
    this.salir = true;
  }
}
