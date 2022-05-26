import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlcoholService {

  // base:string = 'https://ar.openfoodfacts.org/cgi/search.pl';
  // detalles:string = `
  //   ?action=process
  //   &tagtype_0=categories
  //   &tag_contains_0=contains
  //   &tag_0=bebidas-alcoholicas
  //   &json=true
  //   &fields=product_name,nutriments
  // `;
  
  constructor(private http: HttpClient) { }
  
  getBebidas() {
    return this.http.get<any>('https://ar.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=bebidas-alcoholicas&json=true&fields=product_name,nutriments,image_url');
  }
}
