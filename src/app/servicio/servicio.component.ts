import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  servicios: Array<any>;

  constructor() {
    this.servicios = [
      {nombre: 'Internet', descripcion:'Ancho de banda 10M - Fibra', precio: 130000},
      {nombre: 'Telefonia', descripcion:'Telefonia nacional ilimitada', precio: 120000},
      {nombre: 'Televisión Satelital', descripcion:'Full HD', precio: 100000},
      {nombre: 'Triple Play', descripcion:'Ancho de banda 10M - TV cable - telefonia ilimitada', 
      precio: 190000}
    ]
   }

  ngOnInit() {
  }

}
