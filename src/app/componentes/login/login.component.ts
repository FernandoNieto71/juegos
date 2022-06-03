import { createMayBeForwardRefExpression } from '@angular/compiler';
import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { BienvenidosComponent } from '../bienvenidos/bienvenidos.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miUsuario:Usuario;
  constructor(private router: Router) { 

    this.miUsuario=new Usuario();
  }

  ngOnInit(): void {
  }

mostrarDatos(): void
{
  console.log("texto " + this.miUsuario.nombre);
  console.info("objeto", this.miUsuario);
  if (this.miUsuario.nombre == "admin" && this.miUsuario.clave == "1234"){
    this.router.navigate(["bienvenidos"]);
  }
   else {
     this.router.navigate(["registro"]);
   } 
  }

  validaLogin():void{
    if(localStorage.getItem("users")!=null){
      var users = JSON.parse(localStorage.getItem('users'))
    }
    let encontrado = 0;
    for(let i in users ){
      //window.alert(users[i]["mail"]+ " " +this.miUsuario.nombre + " "+ this.miUsuario.clave);
      if(users[i]["mail"] == this.miUsuario.mail){
        encontrado = 1;
        if(users[i]["clave"] == this.miUsuario.clave){
          //window.alert("Bienvenido " + users[i]["nombre"]);
          this.miUsuario.guardaJugador();
          this.router.navigate(["juegos"]);

          break;
        }
        else{
          window.alert("Acceso no Concedido");
        }
      }
    }
    if(!encontrado){
      window.alert("Usuario no existe");
      this.router.navigate(["registro"]);
    }

  }
}


