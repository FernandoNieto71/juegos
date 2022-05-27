import { Component, OnInit } from '@angular/core';
import { Jugadores } from 'src/app/clases/jugadores';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css'],
})
export class HighscoresComponent implements OnInit {
  listaJugadores: Jugadores;
  jugadores: any;
  constructor() {
    //this.listaJugadores.traeScores();
    if (localStorage.getItem('scoreJugador') != null) {
      this.jugadores = JSON.parse(localStorage.getItem('scoreJugador'));
      //console.log(JSON.parse(this.jugadores));
    }
  }

  ngOnInit(): void {}
}
