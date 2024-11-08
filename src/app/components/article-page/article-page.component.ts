import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, ArticleInit } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit{

  articleId: number = 0;
  article: Article = ArticleInit;

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.articleId = +params['id'];
      if(this.articleId){
        this.articleService.getArticleById(this.articleId).subscribe({
          next: (article) => {
            this.article = article;
          },
          error: (err) => {
            console.error('Erreur lors de la récupération de l\'article:', err);
          }
        });
      }
    });
  }
}
