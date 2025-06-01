export const getTodos = () =>
  fetch("http://localhost:3001/todos").then((res) => res.json());
