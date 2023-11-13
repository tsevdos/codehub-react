export default {
  fetchUserTodos: async (username) => {
    const response = await fetch(
      `http://localhost:3001/todos?user=${username}`
    );
    const todos = await response.json();

    return todos;
  },
  fetchTodoById: async (id) => {
    const response = await fetch(`http://localhost:3001/todos/${id}`);
    const todo = await response.json();

    return todo;
  },
};
