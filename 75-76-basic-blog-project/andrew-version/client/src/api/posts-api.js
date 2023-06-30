import axios from 'axios';
import { getUser } from './users-api';

export async function getPosts(options) {
  try {
    const posts = await axios.get('http://localhost:3000/posts', options);
    return posts.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPost({ params, options }) {
  try {
    const post = await axios.get(
      `http://localhost:3000/posts/${params.postId}`,
      options
    );

    const comments = await axios.get(
      `http://localhost:3000/comments?postId=${params.postId}`,
      options
    );

    const posts = await getPosts();
    const { userId } = posts.find((x) => x.id === Number(params.postId));

    const user = await getUser({
      params: {
        userId: userId,
      },
    });

    return {
      user: user,
      post: post.data,
      comments: comments.data,
    };
  } catch (error) {
    console.error(error);
  }
}
