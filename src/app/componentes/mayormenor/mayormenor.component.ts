import { Component, Input, OnInit } from '@angular/core';
import { Jugadores } from 'src/app/clases/jugadores';

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.css'],
})
export class MayormenorComponent implements OnInit {
  @Input() datosAPasarMayorMenor: any;
  leftNumber;
  rightNumber;
  score = '';
  timerGame = 0;
  showBtnStart = true;
  intervalGame: any = 0;
  correcto: any;
  incorrecto: any;
  leyenda: string;
  mostrarFinal:boolean;
  jugadornuevo: Jugadores;

  constructor() {
    this.generateNumbers();
    this.correcto = 0;
    this.incorrecto = 0;
    this.jugadornuevo=new Jugadores();
  }

  ngOnInit(): void {}

  generateNumbers() {
    this.leftNumber = this.generateRandomNumber();
    this.rightNumber = this.generateRandomNumber();
    if (this.leftNumber === this.rightNumber) {
      this.generateNumbers();
    }
  }

  generateRandomNumber() {
    const maxNumber = 10;
    const randomDecimal = Math.random() * maxNumber;
    const randomNumber = Math.round(randomDecimal);
    return randomNumber;
  }

  isGreater(firstValue, secondValue) {
    if (firstValue > secondValue) {
      this.score = this.score + '😁';
      this.correcto++;
      this.verificar();
    } else {
      this.score = this.score + '❌';
      this.incorrecto++;
      this.verificar();
    }
    this.generateNumbers();
  }

  startGame() {
    //this.showBtnStart = false;
    //setTimeout(() => { clearInterval(this.intervalGame); ; }, 1000);
    //this.startTimer();
    this.score = '';
    this.correcto = 0;
    this.incorrecto = 0;
    this.leyenda = '';
    this.mostrarFinal=false;
  }

  startTimer() {
    let timeInSeconds = 0;
    this.intervalGame = setInterval(
      () => (this.timerGame = timeInSeconds++),
      1000
    );
  }

  verificar(): void {
    if (this.correcto == 3) {
      this.leyenda = 'Gano!!';
      this.mostrarFinal=true;
      let dato: string;
        //dato=this.jugadorActual.nombre;
        dato = this.datosAPasarMayorMenor.nombre;
        this.jugadornuevo.setNombre(dato);
        //dato=this.jugadornuevo.mail;
        dato = this.datosAPasarMayorMenor.mail;
        this.jugadornuevo.setMail(dato);
        this.jugadornuevo.juego = this.datosAPasarMayorMenor.juego;
        this.jugadornuevo.setNombrejuego('Mayor Menor');
        this.jugadornuevo.puntaje = this.correcto-this.incorrecto;
        var fecha = new Date();
        this.jugadornuevo.fechaHora = fecha.toLocaleDateString();
        this.jugadornuevo.guardaScore();
    }
    if (this.incorrecto == 3) {
      this.leyenda = 'Perdio!!';
      this.mostrarFinal=true;
    }
  }
}
