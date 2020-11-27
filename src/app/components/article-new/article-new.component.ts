import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { from } from 'rxjs';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: String;
  public page_title: string;
  public url: String;
  public isEdit: boolean;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI:  {
      url: Global.url+'upload-image',
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'sube tu Imagen para el Articulo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
};

  constructor(
    private _articleService:  ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 

    this.article = new Article('','','',null,null);
    this.page_title = 'Crear Articulo';
    this.url = Global.url;
    this.isEdit = false;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this._articleService.create(this.article).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.article = response.article;
          console.log(response);
          this._router.navigate(['/blog']);
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  imageUpload(data){

    
    console.log(data);
     //let image_data = JSON.parse(data);

    // alert(image_data.image);
    console.log(data.body.image);
     this.article.image = data.body.image;

  }

}
