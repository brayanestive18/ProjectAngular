import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public listMovies1:Array<String>;
  public listMovies2:Array<String>;
  public listMovies3:Array<String>;
  public listMovies4:Array<String>;

  constructor() {

    this.listMovies1 = [
      'Los juegos del hambre',
      'Spider-Man',
      'Misión imposible',
      'Parque Jurásico',
      'RoboCop'
    ];

    this.listMovies2 = [
      'El origen',
      'Volver al futuro ',
      'Terminator',
      'Avatar',
      'Matrix'
    ];

    this.listMovies3 = [
      'Scary Movie',
      'American Pie',
      'La máscara',
      'Dos policías rebeldes',
      'Click'
    ];

    this.listMovies4 = [
      'Titanic',
      'Crepúsculo',
      'Siempre a mi lado',
      'Sr. Y Sra. Smith',
      'Sin Compromiso'
    ];

   }

  ngOnInit() {
  }

}
