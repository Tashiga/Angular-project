import { Component } from '@angular/core';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent {

  article = {
    title: '',
    content: '',
    author_id: null,
    tags: ''
  };

  onSubmit() {
    // Ici, vous pouvez envoyer l'article à un service pour le stocker dans votre base de données
    console.log('Article ajouté : ', this.article);
  }
  
}
