import { TodoItem } from './TodoItem';
import { useContext } from 'react';
import { TodoContext } from './App';

export function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <ul id='list'>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </ul>
  );
}
