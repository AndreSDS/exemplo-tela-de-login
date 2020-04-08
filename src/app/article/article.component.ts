import { ArticleService } from './../article-list/article.service';
import { Article } from './../article';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = new Article();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.getArticleKey();
  }

  getArticleKey() {
    this.route.params.pipe(
      take(1)
    ).subscribe(params => {
      const key = params.key;
      this.articleService.getArticletByKey(key).pipe(
        take(1)
      ).subscribe(
        article => {
          (!article)? this.router.navigateByUrl('404') : this.article = article;
        }
      );
    });
  };

}
