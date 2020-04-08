import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../article';
import { ARTICLES } from './../mock-article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]>{
    const articles: Article[] = ARTICLES;
    return of(articles);
  }

  getArticletByKey(key:string){
    const articles: Article[] = ARTICLES.filter(a => a.key === key);
    return of(articles[0]);
  }

}
