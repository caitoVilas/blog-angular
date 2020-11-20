import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  public title:string;
  public user: any;
  public campo: string;

  constructor() {
    this.title = 'Formulario';
    this.user = {
      nombre: '',
      apellido: '',
      bio: '',
      genero: ''
    }
   }

  ngOnInit(): void {
  }

  onSubmit(){
    alert('formulario enviado');
    console.log(this.user);
  }

  hasDadoClick(){
    alert('Has dado Click !!!');
  }
  hasSalido(){
    alert('has salido del imput !!!');
  }

}
