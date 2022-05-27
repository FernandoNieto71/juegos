import { ThisReceiver } from '@angular/compiler';

export class Usuario {
  nombre: string;
  clave: string;
  mail: string;
  //datos:any;
  constructor() {
    /*this.nombre = "Fernando";
    this.clave = "fernando";
    this.mail = "fernando@gmail.com"*/
  }

  registra(): void {
    var users = [];
    if (localStorage.getItem('users') == null) {
      //window.alert("verdadero"); //si queres saca la alerta despues de probar como funciona
      users = [];
    } else {
      //window.alert("sino");
      users = JSON.parse(localStorage.getItem('users'));
    }

    users.push({ nombre: this.nombre, mail: this.mail, clave: this.clave });
    localStorage.setItem('users', JSON.stringify(users));
  }

  guardaJugador(): void {
    var usuarioActual = [];

    usuarioActual.push({ mail: this.mail });
    localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
  }

  verificaJugador(): boolean {
    var valor: boolean;
    //var usuarioActual=[];
    valor = false;
    //usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
    if (localStorage.getItem('usuarioActual') != null) {
      valor = true;
    }

    return valor;
  }

  logoutUsuario() {
    localStorage.removeItem('usuarioActual');
  }

  traeUsuario(): void {
    if (localStorage.getItem('usuarioActual') != null) {
      var usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
      if (localStorage.getItem('users') != null) {
        var users = JSON.parse(localStorage.getItem('users'));
      }
    } else {
      window.alert('else del if');
    }
    //let encontrado = 0;
    for (let i in users) {
      if (usuarioActual[0]['mail'] == users[i]['mail']) {
        this.nombre = users[i]['nombre'];
        this.mail = users[i]['mail'];
        break;
      }
    }
  }
}
