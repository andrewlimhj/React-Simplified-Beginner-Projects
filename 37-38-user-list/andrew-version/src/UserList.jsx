import { Loading } from './Loading';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function UserList() {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (response.status !== 200) throw new Error(response);
        return setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>User List</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <ul>
          {user.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
