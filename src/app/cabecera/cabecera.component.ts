import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor() { }

  accionMenu(){
     console.log("Clic boton");
     var items = document.getElementsByClassName("nav_enlace");   
     for(var i = 0; i < items.length; i++){
       items[i].classList.toggle("ocultar");
     }
  }

  ngOnInit() {
  }

}
