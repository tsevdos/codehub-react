export const fetchTodos = async () => {
  const response = await fetch("http://localhost:3001/todos?user=tsevdos");
  const todos = await response.json();

  return todos;
};

export const fetchUserTodos = async (username) => {
  const response = await fetch(`http://localhost:3001/todos?user=${username}`);
  const todos = await response.json();

  return todos;
};

export const fetchTodoById = async (id) => {
  const response = await fetch(`http://localhost:3001/todos/${id}`);
  const todo = await response.json();

  return todo;
};

export const fetchUser = async () => {
  const response = await fetch(`http://localhost:3001/user/1`);
  const user = await response.json();

  return user;
};

export const fetchUserById = async (userID) => {
  const response = await fetch(`http://localhost:3001/user/${userID}`);
  const user = await response.json();

  return user;
};

export const fetchUserPosts = async (username) => {
  const response = await fetch(`http://localhost:3001/posts?user=${username}`);
  const posts = await response.json();

  return posts;
};
