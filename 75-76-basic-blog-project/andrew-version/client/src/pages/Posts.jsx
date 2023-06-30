import { useLoaderData } from 'react-router-dom';
import { Post } from '../components/Post';

export function Posts() {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <div className='container'>
      <h1 className='page-title'>Posts</h1>
      <div className='card-grid'>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              link={post.id}
            />
          );
        })}
      </div>
    </div>
  );
}
