import { Component, Input, OnInit } from '@angular/core';
import { Comment, CommentsInit } from 'src/app/models/comment.model';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.scss']
})
export class ArticleCommentComponent implements OnInit{

  @Input('comments') comments: Comment[] = CommentsInit;

  constructor(){}

  ngOnInit(): void {}

}
