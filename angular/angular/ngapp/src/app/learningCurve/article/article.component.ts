import { Component,Input, HostBinding, OnInit } from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass ='row';
  
  @Input() article: Article;

  constructor(){
    this.article = new Article(
      'angular','http//angular.io',10
    );
  }

  voteUp(): boolean{
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean{
    this.article.voteDown();
    return false;
  }

  ngOnInit(): void {
    
  }
}
