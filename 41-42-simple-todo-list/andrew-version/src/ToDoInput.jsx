import { useState } from 'react';
import { ToDoList } from './ToDoList';
import { v4 as uuidv4 } from 'uuid';

export function ToDoInput() {
  const [todo, setTodo] = useState('');
  const [todoArray, setTodoArray] = useState([]);

  function handleClick() {
    if (todo === '') return;
    setTodoArray((currentTodoArray) => {
      return [
        ...currentTodoArray,
        { name: todo, completed: false, id: uuidv4() },
      ];
    });
    setTodo('');
  }

  function toggleTodo(todoId, completed) {
    setTodoArray((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoId) return { ...todo, completed };

        return todo;
      });
    });
  }

  function deleteTodo(todoId) {
    setTodoArray((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId);
    });
  }

  return (
    <>
      <ul id='list'>
        {todoArray.map((todo) => {
          return (
            <ToDoList
              key={todo.id}
              name={todo.name}
              completed={todo.completed}
              id={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>

      <div id='new-todo-form'>
        <label htmlFor='todo-input'>New Todo</label>
        <input
          type='text'
          id='todo-input'
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />

        <button onClick={handleClick}>Add Todo</button>
      </div>
    </>
  );
}
