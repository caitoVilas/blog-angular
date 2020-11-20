import { Injectable } from '@angular/core';
import { Pelicula } from '../models/peliculas';

@Injectable()
export class PeliulaService {

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula('Spiderman 4', 2019,'http://1.bp.blogspot.com/-_JFIkASEsLY/Uqv3gnL6UNI/AAAAAAAAQDA/9397w7ODk_w/w1200-h630-p-k-no-nu/Spider+man+4.jpg'),
            new Pelicula('Los Vengadores Endgame',2018,'http://es.web.img3.acsta.net/newsv7/19/04/20/10/32/3283729.jpg'),
            new Pelicula('Batman vs Superman',2015,'http://solismagazine.com/wp-content/uploads/2013/08/superman-batman-1.jpg')
        ];
    }

    holaMundo(){
        return 'Hola mundo desde un servicio de Angular !!!';
    }

    getPeliculas(){
        return  this.peliculas;
    }
}