export interface User {
    id: number;
    username: string;
    email: string;
    created_at: string;
    bio: string;
    avatar_url: string;
  }

export const UserInit : User = {
  id: 0,username: '',
  email: '',
  created_at: '',
  bio: '',
  avatar_url: '',
};