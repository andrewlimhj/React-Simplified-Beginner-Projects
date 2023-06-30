import { useLoaderData } from 'react-router-dom';

export function Todos() {
  const todos = useLoaderData();

  return (
    <div className='container'>
      <h1 className='page-title'>Todos</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className={todo.completed ? 'strike-through' : null}
            >
              {todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
