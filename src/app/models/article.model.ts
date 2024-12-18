import { Comment } from "./comment.model";

export interface Article {
    id: number;
    title: string;
    content: string;
    author: string;
    created_at: string;
    updated_at: string;
    tags: string[];
    likes: number;
    comments: Comment[];
    likesAuthorId: number[];
    language: string;
  }

  export const ArticleInit : Article = {
    id: 0,
    title: '',
    content: '',
    author: '',
    created_at: '',
    updated_at: '',
    tags: [],
    likes: 0,
    comments: [],
    likesAuthorId: [],
    language: ''
  };