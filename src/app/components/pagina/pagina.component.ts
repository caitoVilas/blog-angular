import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public title: string;
  public nombre: string;
  
  
  constructor(private _route:ActivatedRoute, private _router: Router) { 
    this.title = 'Pagina de Pruebas';
    
  }

  ngOnInit(): void {
     this._route.params.subscribe((para: Params) => {
       this.nombre = para.nombre;
     });
   
  }

  redirection(){
    this._router.navigate(['/pagina-de-pruebas','Caito']);
  }

}
