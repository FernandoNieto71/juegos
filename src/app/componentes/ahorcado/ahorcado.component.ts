import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css'],
})
export class AhorcadoComponent implements OnInit {
  @Input() datosAPasarAhorcado: any;
  espacios: Array<string>;
  letra: string = '';
  palabra: string = '';
  letrasElegidas: string = '';
  errores: number = 0;
  alfabeto: string;
  mostrarJuego = false;
  ocultaBoton = true;

  constructor() {
    //this.miAhorcado = new Ahorcado();
    this.palabra = 'soledad';
    this.espacios = this.palabra.split('');
    this.alfabeto = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  }

  ngOnInit(): void {}

  validar() {
    if (/[a-zA-Z]$/.test(this.letra)) {
      this.letrasElegidas += ' - ' + this.letra;
      this.letra = '';
    }
  }

  contiene(pal: string): boolean {
    return (
      this.letrasElegidas
        .toLocaleLowerCase()
        .indexOf(pal.toLocaleLowerCase()) >= 0
    );
  }

  iniciaJuego() {
    this.mostrarJuego = true;
    this.ocultaBoton = false;
  }

  mostrarMenu() {
    this.mostrarJuego = true;
  }

  menuJuego() {
    this.ocultaBoton = true;
    this.mostrarJuego = false;
  }
}
