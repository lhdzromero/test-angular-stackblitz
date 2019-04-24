import { Component } from '@angular/core';

@Component({
  selector: 'videojuegos',
  templateUrl: './videojuegos.component.html'
})

export class VideojuegosComponent {
  public nombre:string;
  public mejor_juego:string;
  public mejor_juego_retro:string;
  public mostrar_retro:boolean;
  public year:number;
  public lst_videojuegos:Array<string>;
  //public color: string = 'yellow';

  constructor(){
    this.nombre = 'Videojuegos';
    this.mejor_juego = 'Gears 5';
    this.mejor_juego_retro = 'Super Mario 64';
    this.mostrar_retro = true;
    this.year = 2020;
    this.lst_videojuegos = [ 'Gears of war 4', 
                             'Zelda', 
                             'Marvel vs Capcom', 
                             'Street Fighter', 
                             'X- Men', 
                             'The King of Fighters'
                            ];
  }

}