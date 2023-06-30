import { useLoaderData } from 'react-router-dom';

export function UserPage() {
  const { user, posts, todos } = useLoaderData();

  return (
    <div className='container'>
      <h1 className='page-title'>{user.name}</h1>
      <div className='page-subtitle'>{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b> {user.address.street} {user.address.suite}{' '}
        {user.address.city} {user.address.zipcode}
      </div>
      <h3 className='mt-4 mb-2'>Posts</h3>
      <div className='card-grid'>
        {posts.map((post) => {
          return (
            <div key={post.id} className='card'>
              <div className='card-header'>{post.title}</div>
              <div className='card-body'>
                <div className='card-preview-text'>{post.body}</div>
              </div>
              <div className='card-footer'>
                <a className='btn' href='posts.html'>
                  View
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <h3 className='mt-4 mb-2'>Todos</h3>
      <ul>
        {todos.map((todos) => {
          return (
            <li
              key={todos.id}
              className={todos.completed ? 'strike-through' : null}
            >
              {todos.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
