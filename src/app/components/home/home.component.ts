import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  public title: string;
  public articles: Article[];

  constructor(private _articleService: ArticleService) {
    this.title = 'Ultimos Articulos';
   }

  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe(
      resp =>{
        if(resp.articles){
          this.articles = resp.articles;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
