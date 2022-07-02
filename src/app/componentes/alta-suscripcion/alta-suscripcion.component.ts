import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { SuscripcionService } from 'src/app/servicio/suscripcion.service';

@Component({
  selector: 'app-alta-suscripcion',
  templateUrl: './alta-suscripcion.component.html',
  styleUrls: ['./alta-suscripcion.component.css'],
})
export class AltaSuscripcionComponent implements OnInit {
  miUsuario:Usuario;

  constructor(private service: SuscripcionService) {
    //this.miUsuario.traeUsuario();
  }

  ngOnInit(): void {}

  suscribirP1(): void {
    this.service.guardaSuscripcion(1);
  }

  suscribirP2(): void {
    this.service.guardaSuscripcion(2);
  }

  suscribirP3(): void {
    this.service.guardaSuscripcion(3);
  }
}
