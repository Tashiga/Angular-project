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
  }