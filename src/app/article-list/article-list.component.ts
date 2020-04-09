import { ArticleService } from './article.service';
import { Article } from '../article';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { TitleService } from '../shared/title.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];
  constructor(
      private articleService: ArticleService,
      private titleService: Title,
      private blogTitle : TitleService
      ) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.blogTitle.blogTitle}`);
    this.getArticles();
  }

  getArticles(){
    this.articleService.getArticles()
      .pipe(
        take(1)
      )
      .subscribe(data => this.articles = data);
  }

}
