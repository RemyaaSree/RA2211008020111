import axios from 'axios';
import { User, Post, Comment, ApiResponse } from '../types';

const BASE_URL = 'http://20.244.56.144/test';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.get<ApiResponse<User>>('/users');
  return response.data.users;
};

export const fetchUserPosts = async (userId: string): Promise<Post[]> => {
  const response = await api.get<ApiResponse<Post>>(`/users/${userId}/posts`);
  return response.data.posts;
};

export const fetchPostComments = async (postId: number): Promise<Comment[]> => {
  const response = await api.get<ApiResponse<Comment>>(`/posts/${postId}/comments`);
  return response.data.comments;
};

export const getRandomImage = (width: number = 200, height: number = 200): string => {
  return `https://picsum.photos/${width}/${height}`;
}; 
