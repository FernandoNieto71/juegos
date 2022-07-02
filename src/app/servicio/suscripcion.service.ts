import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root',
})
export class SuscripcionService {
  usuarioActual: Usuario;
  accesoP1:boolean;
  accesoP2:boolean;
  accesoP3:boolean;

  constructor() {
    this.accesoP1=false;
    this.accesoP2=false;
    this.accesoP3=false;
  }

  guardaSuscripcion(tipo: any) {
    var suscripcionNueva = [];
    let pack: any;
    let juego1: any;
    let juego2: any;
    let juego3: any;
    let juego4: any;
    let juego5: any;
    this.usuarioActual = new Usuario();
    this.usuarioActual.traeUsuario();
    let mail = this.usuarioActual.mail;
    
    
    switch (tipo) {
      case 1:
        juego1 = 0;
        juego2 = 0;
        juego3 = 0;
        juego4 = 0;
        juego5 = 1;
        pack = 1;
        break;
      case 2:
        juego1 = 1;
        juego2 = 0;
        juego3 = 1;
        juego4 = 0;
        juego5 = 0;
        pack = 2;
        break;
      case 3:
        juego1 = 0;
        juego2 = 1;
        juego3 = 0;
        juego4 = 1;
        juego5 = 0;
        pack = 3;
    }

    suscripcionNueva.push({
      mail: mail,
      pack: pack,
      tateti: juego1,
      ppt: juego2,
      adivina: juego3,
      ahorcado: juego4,
      mayorMenor: juego5,
    });
    
    if (localStorage.getItem('suscripciones') == null) {
      suscripcionNueva = [];
    } else {
      suscripcionNueva = JSON.parse(localStorage.getItem('suscripciones'));
      
    }
    
    suscripcionNueva.push({
      mail: mail,
      pack: pack,
      tateti: juego1,
      ppt: juego2,
      adivina: juego3,
      ahorcado: juego4,
      mayorMenor: juego5,
    });
    localStorage.setItem('suscripciones', JSON.stringify(suscripcionNueva));
  }

  get(lista: string) {
    try{
      return JSON.parse(localStorage.getItem(lista));
    } catch(e){
      console.log(e);
    }
    
  }

  accesoPack1(){
    this.accesoP1 = true;
  }

  accesoPack2(){
    this.accesoP2=true;
  }
 
  accesoPack3(){
    this.accesoP3=true;
  }

}
