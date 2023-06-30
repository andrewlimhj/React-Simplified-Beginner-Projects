import { useParams } from 'react-router';
import { useLoaderData, Link } from 'react-router-dom';

export function PostPage() {
  const { postId } = useParams();
  const { user, post, comments } = useLoaderData(postId);
  const { name, id } = user.user;

  return (
    <div className='container'>
      <h1 className='page-title'>{post.title}</h1>
      <span className='page-subtitle'>
        By: <Link to={`/users/${id}`}>{name}</Link>
      </span>
      <div>{post.body}</div>
      <h3 className='mt-4 mb-2'>Comments</h3>
      <div className='card-stack'>
        {comments.map((comment) => {
          return (
            <div key={comment.id} className='card'>
              <div className='card-body'>
                <div className='text-sm mb-1'>{comment.email}</div>
                {comment.body}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
