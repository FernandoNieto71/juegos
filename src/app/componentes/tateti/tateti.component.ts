import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { concat } from 'rxjs';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css'],
})
export class TatetiComponent implements OnInit {
  posiciones = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-'],
  ];
  jugador = 'O';
  resultado: boolean;
  mensajefinal: string;
  contador: any;
  constructor() {
    this.resultado = false;
    this.contador = 0;
  }

  ngOnInit(): void {}

  presion(fila: number, columna: number) {
    if (this.posiciones[fila][columna] == '-') {
      this.posiciones[fila][columna] = this.jugador;
      this.verificarGano('X');
      this.verificarGano('O');
    }
    if (!this.resultado) {
      this.cambiarJugador();
    }
  }

  reiniciar() {
    this.resultado = false;
    this.jugador = 'O';
    this.contador=0;
    for (let f = 0; f < 3; f++)
      for (let c = 0; c < 3; c++) this.posiciones[f][c] = '-';
  }

  cambiarJugador() {
    if (this.jugador == 'O') {
      this.jugador = 'X';
      this.ubicaMaquina();
    } else this.jugador = 'O';
  }

  ubicaMaquina(): void {
    let col: any;
    let fil: any;
    let number: any;

    number = 0;
    for (fil = 0; fil < 3; fil++)
      for (col = 0; col < 3; col++)
        if (this.posiciones[fil][col] == '-') number++;

    switch (number) {
      case 8:
        this.primeraPosicion();
        break;
      case 6:
        this.segundaPosicion();

        break;
      case 4:
        this.terceraPosicion(2);
        break;
      case 2:
        this.terceraPosicion(3);
        break;
    }

    this.verificarGano('X');
    this.verificarGano('O');
    if (!this.resultado) this.jugador = 'O';
    //window.alert('fil '+fil+' col '+col);
  }

  primeraPosicion(): void {
    let primerPos: any;
    let primerX: any;
    let primerY: any;
    primerPos = Math.floor(Math.random() * 4);
    if (primerPos == 4) {
      primerX = 2;
      primerY = 2;
    } else if (primerPos == 0) {
      primerX = 0;
      primerY = 0;
    } else if (primerPos == 1) {
      primerX = 0;
      primerY = 2;
    } else {
      primerX = 2;
      primerY = 0;
    }

    if (this.buscaVacios(1, 1)) this.posiciones[1][1] = this.jugador;
    else this.posiciones[primerX][primerY] = this.jugador;
  }

  segundaPosicion(): void {
    let jugadasTermino = [
      '12',
      '15',
      '14',
      '23',
      '25',
      '57',
      '45',
      '47',
      '58',
      '35',
      '56',
      '59',
      '36',
      '69',
      '78',
      '89',
      '13',
      '17',
      '39',
      '79',
    ];
    let posicionar = [
      3, 9, 7, 1, 8, 3, 6, 1, 2, 7, 4, 1, 9, 3, 9, 7, 2, 4, 6, 8,
    ];
    let posBusca: any;
    let nuevaFil: any;
    let nuevaCol: any;
    for (let k = 0; k < 20; k++)
      if (jugadasTermino[k] == this.analiza()) {
        posBusca = posicionar[k];
        break;
      }
    if (posBusca < 4) {
      nuevaFil = 0;
      nuevaCol = posBusca - 1;
    } else if (posBusca < 7) {
      nuevaFil = 1;
      nuevaCol = posBusca - 4;
    } else {
      nuevaFil = 2;
      nuevaCol = posBusca - 7;
    }
    this.posiciones[nuevaFil][nuevaCol] = this.jugador;
  }

  terceraPosicion(vueltas: any): void {
    let jugadasTermino = [
      '12',
      '15',
      '14',
      '23',
      '25',
      '57',
      '45',
      '47',
      '58',
      '35',
      '56',
      '59',
      '36',
      '69',
      '78',
      '89',
      '13',
      '17',
      '39',
      '79',
    ];
    let posicionar = [
      3, 9, 7, 1, 8, 3, 6, 1, 2, 7, 4, 1, 9, 3, 9, 7, 2, 4, 6, 8,
    ];
    let posBusca: any;
    let nuevaFil: any;
    let nuevaCol: any;
    let cadena: string;
    let primerParte: string;
    let segundaParte: string;
    let terceraParte: string;
    cadena = this.analiza();
    primerParte = cadena.substring(0, 2);
    segundaParte = cadena.substring(1, 3);
    if (vueltas == 3) {
      terceraParte = cadena.substring(2, 4);
    }
    //window.alert(primerParte);
    let cuentaVueltas: any;
    let cadenaCompara: string;
    let salir: boolean;
    salir = true;
    cadenaCompara = primerParte;
    cuentaVueltas = 0;
    do {
      if (cuentaVueltas == 1) {
        cadenaCompara = segundaParte;
      }
      if (cuentaVueltas == 2) {
        cadenaCompara = terceraParte;
      }

      for (let k = 0; k < 20; k++)
        if (jugadasTermino[k] == cadenaCompara) {
          posBusca = posicionar[k];
          break;
        }
      if (posBusca < 4) {
        nuevaFil = 0;
        nuevaCol = posBusca - 1;
      } else if (posBusca < 7) {
        nuevaFil = 1;
        nuevaCol = posBusca - 4;
      } else {
        nuevaFil = 2;
        nuevaCol = posBusca - 7;
      }
      cuentaVueltas++;
      if (cuentaVueltas == vueltas && !this.buscaVacios(nuevaFil, nuevaCol)) {
        salir = false;
        //window.alert('entro aca '+ cadenaCompara + ' cadena '+cadena+' 1cad '+primerParte+ ' 2cad '+segundaParte+' 3cad'+terceraParte);
        //primer vacio
        for (let i = 0; i < 2; i++)
          for (let j = 0; j < 2; j++)
            if (this.posiciones[i][j] == '-') {
              nuevaFil = i;
              nuevaCol = j;
            }
      }
    } while (!this.buscaVacios(nuevaFil, nuevaCol) && salir);

    this.posiciones[nuevaFil][nuevaCol] = this.jugador;
  }

  analiza() {
    let cadena: string;
    let band = 1;
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        if (this.posiciones[i][j] == 'O') {
          if (band) {
            cadena = this.analizaValores(i, j) + '';
            band = 0;
          } else {
            cadena = cadena + this.analizaValores(i, j);
          }
        }

    return cadena;
  }

  analizaValores(i: any, j: any): string {
    let retornado: string;
    if (i == 0) {
      retornado = j + 1;
    } else if (i == 1) {
      retornado = 3 + j + 1;
    } else {
      retornado = 6 + j + 1;
    }
    return retornado;
  }

  buscaVacios(filaB: any, columnaB: any): boolean {
    let devolucion = false;
    if (this.posiciones[filaB][columnaB] == '-') devolucion = true;

    return devolucion;
  }

  leyendaFinal(): void {
    this.resultado = true;
    this.mensajefinal = 'Gano:' + this.jugador;
  }

  verificarGano(ficha: string) {
    this.contador++;
    if (
      this.posiciones[0][0] == ficha &&
      this.posiciones[0][1] == ficha &&
      this.posiciones[0][2] == ficha
    ) {
      //alert('Gano:'+ficha);
      this.resultado = true;
      this.leyendaFinal();
    }
    if (
      this.posiciones[1][0] == ficha &&
      this.posiciones[1][1] == ficha &&
      this.posiciones[1][2] == ficha
    ) {
      //alert('Gano:'+ficha);
      this.resultado = true;
      this.leyendaFinal();
    }
    if (
      this.posiciones[2][0] == ficha &&
      this.posiciones[2][1] == ficha &&
      this.posiciones[2][2] == ficha
    ) {
      //alert('Gano:'+ficha);
      this.resultado = true;
      this.leyendaFinal();
    }
    if (
      this.posiciones[0][0] == ficha &&
      this.posiciones[1][0] == ficha &&
      this.posiciones[2][0] == ficha
    ) {
      //alert('Gano:'+ficha);
      this.resultado = true;
      this.leyendaFinal();
    }
    if (
      this.posiciones[0][1] == ficha &&
      this.posiciones[1][1] == ficha &&
      this.posiciones[2][1] == ficha
    ) {
      //alert('Gano:'+ficha);
      this.resultado = true;
      this.leyendaFinal();
    }
    if (
      this.posiciones[0][2] == ficha &&
      this.posiciones[1][2] == ficha &&
      this.posiciones[2][2] == ficha
    ) {
      //alert('Gano:'+ficha);
      this.resultado = true;
      this.leyendaFinal();
    }
    if (
      this.posiciones[0][0] == ficha &&
      this.posiciones[1][1] == ficha &&
      this.posiciones[2][2] == ficha
    ) {
      //alert('Gano:'+ficha);
      this.resultado = true;
      this.leyendaFinal();
    }
    if (
      this.posiciones[0][2] == ficha &&
      this.posiciones[1][1] == ficha &&
      this.posiciones[2][0] == ficha
    ) {
      //alert('Gano:'+ficha);
      this.resultado = true;
      this.leyendaFinal();
    }

    if (this.contador == 20 && !this.resultado) {
      let cuentaVacias: any;
      cuentaVacias = 0;
      for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
          if (this.posiciones[i][j] != '-') {
            cuentaVacias++;
          }

      if (cuentaVacias == 9) {
        this.resultado = true;
        this.mensajefinal = 'Empate!!';
      }
    }
  }
}
