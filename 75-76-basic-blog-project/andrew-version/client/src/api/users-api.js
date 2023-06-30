import axios from 'axios';
import { getPosts } from './posts-api';
import { getTodos } from './todos-api';

export async function getUsers(options) {
  try {
    const users = await axios.get('http://localhost:3000/users', options);
    return users.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUser({ params, options }) {
  try {
    const user = await axios.get(
      `http://localhost:3000/users/${params.userId}`,
      options
    );

    const posts = await getPosts();
    const userPosts = posts.filter(
      (post) => post.userId === Number(params.userId)
    );

    const todos = await getTodos();
    const userTodos = todos.filter(
      (todo) => todo.userId === Number(params.userId)
    );

    return {
      user: user.data,
      posts: userPosts,
      todos: userTodos,
    };
  } catch (error) {
    console.error(error);
  }
}
