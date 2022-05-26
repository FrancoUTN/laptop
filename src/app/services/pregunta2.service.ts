import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Pregunta2Service {

  constructor(private http: HttpClient) { }
  
  getRandomCocktail() {
    return this.http.get<any>('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  }
}
