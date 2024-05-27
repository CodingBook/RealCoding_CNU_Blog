import axios, { AxiosResponse } from 'axios';
import { IPost, IResponsePostList } from './types';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://34.47.76.19:8080/',
});



export const getPostList = (): Promise<AxiosResponse<IResponsePostList>> => {
  return instance.get('/posts');
};

export const createPost = (title : string, contents: string, tag: string) => {
  return instance.post('/posts', {
    title,
    contents,
    tag
  });
};

export const getPostById = (id: string): Promise<AxiosResponse<IPost>> => {
  return instance.get(`/posts/${id}`);
};

export const updatePostById = (id: string, title: string, contents: string, tag: string) => {
  return instance.put(`posts/${id}`, {
    title,
    contents,
    tag
  });
};

export const deletePostById = (id: string) => {
  return instance.delete(`posts/${id}`);
};
