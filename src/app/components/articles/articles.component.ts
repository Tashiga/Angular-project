import { Component } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {

  articles : Article[] = [
    //données de test
    {
    "id": 1,
    "title": "Introduction to Angular",
    "content": "Angular is a platform for building mobile and desktop web applications...",
    "author": "John Doe",
    "created_at": "2024-02-01T09:00:00Z",
    "updated_at": "2024-02-01T09:30:00Z",
    "tags": ["Angular", "Frontend", "JavaScript"],
    "likes": 120,
    "comments": [
      { "author": "Jane Smith", "text": "Great introduction to Angular!" },
      { "author": "Mark Brown", "text": "Very informative article." }
    ]
  },
  {
    "id": 2,
    "title": "Advanced Angular Features",
    "content": "This article covers advanced topics in Angular, including RxJS, NgRx, and more...",
    "author": "Sarah Lee",
    "created_at": "2024-02-10T10:00:00Z",
    "updated_at": "2024-02-10T10:30:00Z",
    "tags": ["Angular", "RxJS", "NgRx"],
    "likes": 80,
    "comments": [
      { "author": "Emma White", "text": "Great advanced topics, very useful!" },
      { "author": "Chris Green", "text": "Looking forward to more articles like this." }
    ]
  }
];

}
