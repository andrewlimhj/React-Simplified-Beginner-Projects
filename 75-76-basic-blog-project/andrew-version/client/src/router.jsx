import { createBrowserRouter } from 'react-router-dom';
import { NavLayout } from './layout/NavLayout';
import { Home } from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';
import { Posts } from './pages/Posts';
import { PostPage } from './pages/PostPage';
import { Todos } from './pages/Todos';
import { Users } from './pages/Users';
import { getPosts } from './api/posts-api';
import { getPost } from './api/posts-api';
import { getUsers } from './api/users-api';
import { getUser } from './api/users-api';
import { UserPage } from './pages/UserPage';
import { getTodos } from './api/todos-api';

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },

      {
        path: '/posts',
        children: [
          {
            index: true,
            element: <Posts />,
            loader: ({ request: { signal } }) => {
              return getPosts({ signal });
            },
          },
          {
            path: ':postId',
            element: <PostPage />,
            loader: ({ params, request: { signal } }) => {
              return getPost({ params, signal });
            },
          },
        ],
      },
      {
        path: '/todos',
        element: <Todos />,
        loader: ({ request: { signal } }) => {
          return getTodos({ signal });
        },
      },
      {
        path: '/users',
        children: [
          {
            index: true,
            element: <Users />,
            loader: ({ request: { signal } }) => {
              return getUsers({ signal });
            },
          },
          {
            path: ':userId',
            element: <UserPage />,
            loader: ({ params, request: { signal } }) => {
              return getUser({ params, signal });
            },
          },
        ],
      },
    ],
  },
]);
