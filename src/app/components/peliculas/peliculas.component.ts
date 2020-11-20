import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Pelicula } from '../../models/peliculas'
import { PeliulaService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers:[PeliulaService]
})
export class PeliculasComponent implements OnInit {

  public peliculas: Pelicula[];
  public title: string;
  public favorita: Pelicula;

  constructor(private _peliculaService: PeliulaService) { 
    this.title = 'Peliculas';
    this.peliculas = _peliculaService.getPeliculas();
  }

  ngOnInit(): void {
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
  }

  mostrarFavorita(event){
    console.log(event);
    this.favorita = event.pelicula;
  }

}
