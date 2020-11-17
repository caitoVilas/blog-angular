import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Pelicula } from '../../models/peliculas'

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public peliculas: Pelicula[];
  public title: string;
  public favorita: Pelicula;

  constructor() { 
    this.title = 'Peliculas';
    this.peliculas = [
      new Pelicula('Spiderman 4', 2019,'http://1.bp.blogspot.com/-_JFIkASEsLY/Uqv3gnL6UNI/AAAAAAAAQDA/9397w7ODk_w/w1200-h630-p-k-no-nu/Spider+man+4.jpg'),
      new Pelicula('Los Vengadores Endgame',2018,'http://es.web.img3.acsta.net/newsv7/19/04/20/10/32/3283729.jpg'),
      new Pelicula('Batman vs Superman',2015,'http://solismagazine.com/wp-content/uploads/2013/08/superman-batman-1.jpg')
    ]
  }

  ngOnInit(): void {
    console.log(this.peliculas);
  }

  mostrarFavorita(event){
    console.log(event);
    this.favorita = event.pelicula;
  }

}
