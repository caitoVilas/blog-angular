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

    getArticles(last: any = null):Observable<any> {
        
        var articles = 'articles';

        if(last !=null){
             articles = 'articles/true';
        }

        return this._hhtp.get(this.url+articles);
    }

    getArticle(articleID): Observable<any> {

        return this._hhtp.get(this.url+'article/'+articleID);
    }

    search(searchString): Observable<any>{

        return this._hhtp.get(this.url+'search/'+searchString);
    }
<<<<<<< HEAD

    create(article: Article): Observable<any>{

        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('content-type','application/json');

        return this._hhtp.post(this.url+'save',params,{headers: headers});
    }

    update(id, article): Observable<any>{

        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('content-type','application/json');

        return this._hhtp.put(this.url+'article/'+id, params,{headers: headers});
    }

    delete(id): Observable<any>{

        let headers = new HttpHeaders().set('content-type','application/json');

        return this._hhtp.delete(this.url+'article/'+id, {headers: headers});
    }
=======
>>>>>>> eb23bbe677b67b86e0e7fa9f30a9101905ce219f
}
