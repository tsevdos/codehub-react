export type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

// In-memory data storage for demonstration purposes
let todos: Todo[] = [
  { id: 1, task: "Learn Next.js 14", completed: true },
  { id: 2, task: "Write CRUD API example", completed: false },
];

// Generate new ID for new todos
export const getNewId = () =>
  todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;

// Functions to interact with todos
export const getTodos = () => todos;

export const addTodo = (task: string) => {
  const newTodo: Todo = { id: getNewId(), task, completed: false };
  todos.push(newTodo);
  return newTodo;
};

export const updateTodo = (id: number, updates: Partial<Omit<Todo, "id">>) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) return null;
  todos[todoIndex] = { ...todos[todoIndex], ...updates };
  return todos[todoIndex];
};

export const deleteTodo = (id: number) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) return false;
  todos = todos.filter((todo) => todo.id !== id);
  return true;
};
