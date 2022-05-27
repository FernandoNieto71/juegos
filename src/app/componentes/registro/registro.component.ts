import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  nuevoUsuario:Usuario;
  auxClave:string;
  constructor(private router: Router) { 
    this.nuevoUsuario=new Usuario();
    this.auxClave="";
  }

  ngOnInit(): void {
  }

  verificaDobleClave(): void{
    //valor:Boolean;
    if(this.nuevoUsuario.nombre != null && this.nuevoUsuario.mail != null){
      if(this.auxClave == this.nuevoUsuario.clave){
        this.nuevoUsuario.registra();
        this.router.navigate(["login"]);
      }
      else{
        window.alert("Las claves tienen que ser identicas");
        //this.router.navigate(["**"]);
      }
    } 
    else{
      window.alert("Debe ingresar nombre y mail");
      this.nuevoUsuario.mail = "";
      this.nuevoUsuario.nombre = "";
    }
  }

}
