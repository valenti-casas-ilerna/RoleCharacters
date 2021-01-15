import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { }

  public getStarWarsVehicles(): void {
    console.log('Se ha llamado al getStarWarsVehicles()');
  }

  public getStarWarsPeople(): void {


    this.http.get('https://swapi.dev/api/people/ñfjdsafdsfa/').subscribe(

      (value: Object) => {
        console.log('He recibido respuesta correcta del Servidor');
        console.log(value);                
      },

      (error: any) => {
        console.log('He recibido un error del servidor');   
        console.log(error);
      }
    )
  }
}
