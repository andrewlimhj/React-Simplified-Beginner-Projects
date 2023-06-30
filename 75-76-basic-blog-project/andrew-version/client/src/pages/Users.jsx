import { useLoaderData } from 'react-router-dom';
import { User } from '../components/User';

export function Users() {
  const users = useLoaderData();

  return (
    <div className='container'>
      <h1 className='page-title'>Users</h1>
      <div className='card-grid'>
        {users.map((user) => {
          return (
            <User
              key={user.id}
              name={user.name}
              website={user.website}
              email={user.email}
              link={user.id}
            />
          );
        })}
      </div>
    </div>
  );
}
