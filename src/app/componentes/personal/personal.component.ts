import { Component, OnInit } from '@angular/core';
import { Github } from 'src/app/clases/github';
import { PersonalService } from 'src/app/servicio/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  persona:Github;
  constructor(private miservicio: PersonalService) { }

  ngOnInit(): void {
    this.cargaDatos();
  }
  
  cargaDatos(){
    this.miservicio.devuelve().subscribe(resp=>{
      this.persona=new Github(resp)
    })
    
  }

}
