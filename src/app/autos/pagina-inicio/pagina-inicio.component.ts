import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IAutos } from '../interfaces/autos';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

    nuevo: IAutos = {
      marca: '',
      modelo: '',
      precio:  0

    }

    autos: IAutos[]= [

      {
        marca: 'NISAN',
        modelo: 'SENTRA',
        precio: 3000
      },
      {
        marca: 'HONDA',
        modelo: 'CIVIC',
        precio: 6500

      }



    ]




  constructor() { }

  ngOnInit(): void {
  }
  agregar(){
    if(this.nuevo.marca.trim().length ===0){
        return;

    }

    if(this.nuevo.modelo.trim().length ===0){
      return;

  }

  if(this.nuevo.precio == null){
    return;

}
    this.autos.push(this.nuevo);
    this.nuevo = {
      marca : '',
      modelo: '',
      precio : 0

}



  }

}
