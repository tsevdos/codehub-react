export const fetchTodos = async () => {
  const response = await fetch("http://localhost:3001/todos?user=tsevdos");
  const data = await response.json();

  return data;
};

export const fetchTodo = async (id) => {
  const response = await fetch(`http://localhost:3001/todos/${id}`);
  const todo = await response.json();

  return todo;
};
