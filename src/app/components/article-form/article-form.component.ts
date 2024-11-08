import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleInit } from 'src/app/models/article.model';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit{

  article = ArticleInit;

  articleForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.articleForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      tags: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      // Ici, vous pouvez envoyer l'article à un service pour le stocker dans votre base de données
      console.log('Article ajouté : ', this.article); 
    }
  }
  
}
