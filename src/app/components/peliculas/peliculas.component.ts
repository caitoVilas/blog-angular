import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public peliculas: Array<any>;

  public title: string;

  constructor() { 
    this.title = 'Peliculas';
    this.peliculas = [
      {year: 2019,title: 'Spiderman 4', image: 'http://1.bp.blogspot.com/-_JFIkASEsLY/Uqv3gnL6UNI/AAAAAAAAQDA/9397w7ODk_w/w1200-h630-p-k-no-nu/Spider+man+4.jpg'},
      {year: 2018,title: 'Los Vengadores Endgame', image: 'http://es.web.img3.acsta.net/newsv7/19/04/20/10/32/3283729.jpg'},
      {year: 2015,title: 'Batman vs Superman', image: 'http://solismagazine.com/wp-content/uploads/2013/08/superman-batman-1.jpg'},
    ]
  }

  ngOnInit(): void {
    console.log(this.peliculas);
  }

}
