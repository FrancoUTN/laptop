import { Component, OnInit } from '@angular/core';
import { ScoresService } from 'src/app/services/scores.service';
import { AlcoholService } from 'src/app/services/alcohol.service';

@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.component.html',
  styleUrls: ['./alcohol.component.scss']
})
export class AlcoholComponent implements OnInit {
  productos:Array<any> = [];
  producto:any;

  guess:number = 0;
  resultado:string = '';
  respuesta:number = 0;
  puntaje:number = 0;

  cargando:boolean = false;

  constructor(
    private alcoholService:AlcoholService,
    private scoresService:ScoresService) { }

  ngOnInit(): void {
    this.traerBebidas();
  }

  renovarBebida () {    
    const aleatorio = this.getRndInteger(0, this.productos.length - 1);
    this.producto = this.productos[aleatorio];
    console.log(this.producto.nutriments.alcohol);
  }

  traerBebidas() {
    this.cargando = true;

    this.alcoholService.getBebidas().subscribe(response => {
      const aux = response.products;

      aux.forEach((product: { product_name: any; nutriments: { alcohol: any; }; image_url: any; }) => {
        if (
          product.product_name &&
          product.nutriments.alcohol &&
          product.image_url) {
            this.productos.push(product);
        }
      });

      this.renovarBebida();
      this.cargando = false;
    });
  }

  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  onRtaClick () {

    const aprox = Math.floor(this.producto.nutriments.alcohol);

    if (this.guess === aprox || this.guess === aprox + 1) {
      this.resultado = 'bien';
      this.puntaje += 1;
    }
    else if (this.guess > aprox - 3 && this.guess < aprox + 3) {
      this.resultado = 'cerca';
    }
    else if (this.puntaje > 0) {
      this.resultado = 'mal';
      this.puntaje -= 1;
    }
    else {
      this.resultado = 'mal';
    }

    this.respuesta = this.producto.nutriments.alcohol;

    this.renovarBebida();
  }
  
  sendScore () {
    this.scoresService.setScore('alcohol', this.puntaje);
  }

}
