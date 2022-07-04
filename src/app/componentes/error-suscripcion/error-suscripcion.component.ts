import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-suscripcion',
  templateUrl: './error-suscripcion.component.html',
  styleUrls: ['./error-suscripcion.component.css']
})
export class ErrorSuscripcionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  irAltaSuscripcion(){
    this.router.navigate(["altasuscripcion"]);
  }

}
