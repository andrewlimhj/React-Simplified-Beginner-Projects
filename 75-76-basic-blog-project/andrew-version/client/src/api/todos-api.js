import axios from 'axios';

export async function getTodos(options) {
  try {
    const todos = await axios.get('http://localhost:3000/todos', options);
    return todos.data;
  } catch (error) {
    console.error(error);
  }
}
