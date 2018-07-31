import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public videoGames1:Array<String>;
  public videoGames2:Array<String>;
  public videoGames3:Array<String>;
  public videoGames4:Array<String>;

  constructor() {
    this.videoGames1 = [
      'Assassin\'s Creed',
      'Captain Rainbow',
      'Dragon Ball Z: Sagas',
      'Far Cry 5',
      'God of War'
    ];

    this.videoGames2 = [
      'Batman: Arkham Asylum',
      'Tomb Raider',
      'Bioshock 2',
      'Mario Bros',
      'Assassin\'s Creed II'
    ];

    this.videoGames3 = [
      'Super Mario',
      'Crash Bandicoot',
      'Sonic',
      'Rayman Legends',
      'Donkey Kong'
    ];

    this.videoGames4 = [
      'Call of Dutty',
      'GTA 5',
      'Fifa 2018',
      'Mario Bros',
      'Sonic'
    ];

   }

  ngOnInit() {
  }

}
