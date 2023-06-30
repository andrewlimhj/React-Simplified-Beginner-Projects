import { useActionData, useNavigation, redirect } from 'react-router-dom';
import axios from 'axios';
import { PostForm } from '../components/PostForm';

function NewPost() {
  const errorMessage = useActionData();

  return (
    <>
      <h1 className='page-title'>New Post</h1>
      <PostForm errorMessage={errorMessage} />
    </>
  );
}

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get('title');
  const body = formData.get('body');
  const user = formData.get('userId');
  const errors = {};

  if (title === '') errors.title = 'Title is required';
  if (body === '') errors.body = 'Body is required';
  if (user === '') errors.user = 'User is required';
  if (Object.keys(errors).length) return errors;

  const post = await axios.post('http://localhost:3000/posts', {
    userId: user,
    title: title,
    body: body,
  });

  console.log(post.data);
  return redirect('/');
}

export const newPostRoute = {
  action,
  element: <NewPost />,
};
