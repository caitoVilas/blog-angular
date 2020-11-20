import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Article } from '../models/article';
import { Global } from '../services/global';

@Injectable()
export class ArticleService {

    public url: string;

    constructor(
        private _hhtp: HttpClient
    ){
        this.url = Global.url;
    }

    pruebas(){
        return 'Soy el servicio de Articulos !!!';
    }

    getArticles():Observable<any> {
        return this._hhtp.get(this.url+'articles');
    }
}
