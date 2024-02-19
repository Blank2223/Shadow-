import { Component } from '@angular/core';
/*import { Article } from './learningCurve/article/article.model';*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /* addArticle(title: HTMLInputElement, link: HTMLInputElement):boolean{
    console.log(`adding article: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value,link.value,0));
    title.value = '';
    link.value = '';
    return false;
  }

  articles: Article[];

  constructor(){
    this.articles = [
      new Article('Angular', 'http://angular.io',3),
      new Article('FullStack', 'http://FullStack.io',2),
      new Article('Angular Homepage', 'http://angular.io',1),
    ];
  }

  sortedArticle(): Article[]{
    return this.articles.sort((a: Article, b: Article)=>b.votes - a.votes);
  }*/

  constructor(){
    
  };

}
