export interface User {
  id: string;
  name: string;
}

export interface Post {
  id: number;
  userid: number;
  content: string;
  commentCount?: number;
}

export interface Comment {
  id: number;
  postid: number;
  content: string;
}

export interface UserWithPostCount extends User {
  postCount: number;
}

export interface ApiResponse<T> {
  [key: string]: T[];
} 
