import { useReducer, useState, useEffect, createContext } from 'react';
import './styles.css';
import { TodoList } from './TodoList';
import { NewTodoForm } from './NewTodoForm';
import { TodoFilterForm } from './TodoFilterForm';

const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
};

const LOCAL_STORAGE_KEY = 'TODO';

export const TodoContext = createContext();

function reducer(todos, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_TODO:
      return [
        ...todos,
        { name: payload.name, completed: false, id: crypto.randomUUID() },
      ];

    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, completed: payload.completed };
        }
        return todo;
      });

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== payload.id);
    case ACTIONS.UPDATE_TODO:
      console.log(payload.name, payload.id);
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, name: payload.name };
        }

        return todo;
      });
    default:
      throw new Error(`No action found for action ${type}`);
  }
}

function App() {
  const [filteredName, setFilteredName] = useState('');
  const [hideCompletedFilter, setHideCompletedFilter] = useState(false);
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value == null) return initialValue;

    return JSON.parse(value);
  });

  console.log(filteredName);

  const filteredTodos = todos.filter((todo) => {
    if (hideCompletedFilter && todo.completed) return false;
    return todo.name.toLowerCase().includes(filteredName.toLowerCase());
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addNewTodo(name) {
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
  }

  function toggleTodo(todoId, completed) {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todoId, completed } });
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todoId } });
  }

  function updateTodoName(todoId, name) {
    dispatch({
      type: ACTIONS.UPDATE_TODO,
      payload: { id: todoId, name: name },
    });
  }

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        addNewTodo,
        toggleTodo,
        deleteTodo,
        updateTodoName,
      }}
    >
      <TodoFilterForm
        name={filteredName}
        setName={setFilteredName}
        hideCompletedFilter={hideCompletedFilter}
        setHideCompletedFilter={setHideCompletedFilter}
      />
      <TodoList />
      <NewTodoForm />
    </TodoContext.Provider>
  );
}

export default App;
