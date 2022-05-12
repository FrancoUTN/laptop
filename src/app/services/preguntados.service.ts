import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pregunta } from 'src/app/models/pregunta';

const defaultJSONPath = 'assets/preguntas.json';

@Injectable({
  providedIn: 'root'
})
export class PreguntadosService {
  
  constructor(private http: HttpClient) { }

  getQuestions(jsonPath: string = defaultJSONPath) {
    return this.http.get<{category: string; items: Pregunta[]}>(jsonPath);
  }

}
