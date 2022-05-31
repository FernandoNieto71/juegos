import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Github } from '../clases/github';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  url = 'https://api.github.com/users/FernandoNieto71';
  constructor(private http: HttpClient) { 

     
  }

  devuelve(){
    return this.http.get<Github>(this.url);
  }
}
