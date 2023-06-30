import { useLoaderData, redirect, useActionData } from 'react-router-dom';
import axios from 'axios';
import { getPost } from '../api/posts';
import { PostForm } from '../components/PostForm';

export function EditPost() {
  const { post } = useLoaderData();
  const errorMessage = useActionData();
  console.log(post);
  return (
    <>
      <h1 className='page-title'>Edit Post</h1>
      <PostForm
        errorMessage={errorMessage}
        innitialTitle={post.title}
        initialBody={post.body}
        initialAuthor={post.userId}
      />
    </>
  );
}

async function loader({ request: { signal }, params: { postId } }) {
  const post = await getPost(postId, { signal });
  return { post };
}

async function action({ request, request: { signal }, params: { postId } }) {
  const formData = await request.formData();
  const title = formData.get('title');
  const body = formData.get('body');
  const user = formData.get('userId');
  const errors = {};

  if (title === '') errors.title = 'Title is required';
  if (body === '') errors.body = 'Body is required';
  if (user === '') errors.user = 'User is required';
  if (Object.keys(errors).length) return errors;

  const editPost = await axios.put(
    `http://localhost:3000/posts/${postId}`,
    {
      userId: user,
      title: title,
      body: body,
    },
    { signal }
  );

  console.log(editPost);
  return redirect('/');
}

export const editPostRoute = {
  loader,
  action,
  element: <EditPost />,
};
