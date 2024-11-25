import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, ArticleInit } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { TextTruncationService } from 'src/app/services/text-truncation.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit{

  articleId: number = 0;
  article: Article = ArticleInit;
  translated: boolean = false;

  constructor(private articleService: ArticleService,
              private textTtruncationService: TextTruncationService,
              private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.articleId = +params['id'];
      if(this.articleId){
        this.articleService.getArticleById(this.articleId).subscribe({
          next: (article) => this.article = article,
          error: (err) => console.error('Erreur lors de la récupération de l\'article:', err)
        });
      }
    });
    //get user translation language
  }

  async translate() :  Promise<void> {
    if(!this.translated && this.article){
      this.article.content = await this.translateArticleText(this.article.content.slice(0,500), this.article.language, 'ta');
      this.translated = true;
    }
  }

  async translateArticleText(text: string, sourceLang: string, targetLang: string): Promise<string> {
    try {
      const translation = await this.textTtruncationService.translateText(text, sourceLang, targetLang).toPromise();
      console.log("translation test - ", translation);
      return translation?.translatedText ?? text;
    } catch (error: unknown) {
      if (this.isHttpErrorResponse(error) && error.status === 429) {
        console.error('Quota d\'API atteint. Essayez plus tard.');
        return text;
      }
      else {
        console.error('Erreur de traduction:', error);
      return text;
      }
    }
  }

  private isHttpErrorResponse(error: unknown): error is HttpErrorResponse {
    return (error as HttpErrorResponse).status !== undefined;
  }
}
