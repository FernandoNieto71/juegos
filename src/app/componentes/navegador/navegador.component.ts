import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {
  miUsuario:Usuario;
  constructor() { 
    this.miUsuario=new Usuario();
  }

  ngOnInit(): void {
  }



}
