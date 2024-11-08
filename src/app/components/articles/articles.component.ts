import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { TextTruncationService } from 'src/app/services/text-truncation.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles : Article[] = [];
  translated: boolean = false;

  constructor(private textTtruncationService: TextTruncationService,
              private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe({
      next: (articles) => {
        this.articles = articles;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de l\'article:', err);
      }
    });
  }

  getText(content: string): string{
    return this.textTtruncationService.truncateText(content);
  }

  async translate() :  Promise<void> {
    if(!this.translated){
      const translationPromises = this.articles.map(async (article) => {
        article.content = await this.translateArticleText(article.content.slice(0,500), article.language, 'ta');
      });
      await Promise.all(translationPromises);
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
      return text; // Renvoie le texte original en cas d'erreur
      }
    }
  }

  private isHttpErrorResponse(error: unknown): error is HttpErrorResponse {
    return (error as HttpErrorResponse).status !== undefined;
  }

}
