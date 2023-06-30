import { baseApi } from './base';

export function getPosts(options) {
  return baseApi.get('posts', options).then((res) => res.data);
}

export function getPost(postId, options) {
  return baseApi.get(`posts/${postId}`, options).then((res) => res.data);
}

export function getPostQuery({ query, userId, options }) {
  console.log(userId);
  return baseApi
    .get(`posts?q=${query}${userId ? `&userId=${userId}` : ''}`, options)
    .then((res) => res.data);
}
