import { create } from "zustand";
import { getTodos } from "../api/todos";

export const useTodos = create((set) => ({
  input: "",
  todos: [],
  isLoading: true,

  updateInput: (input) => set((state) => ({ ...state, input })),
  loadTodos: async () => {
    getTodos()
      .then((todos) => {
        set((state) => ({ ...state, todos, isLoading: false }));
      })
      .catch((e) => {
        console.log(e);
        set((state) => ({ ...state, isLoading: false }));
      });
  },
  addTodo: (todo) => set((state) => ({ ...state, todos: [...state.todos, todo], input: "" })),
  toggleTodo: (todoId) =>
    set((state) => {
      const newTodos = state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo
      );

      return { ...state, todos: newTodos };
    }),
  deleteTodo: (todoId) =>
    set((state) => {
      const newTodos = state.todos.filter((todo) => todo.id !== todoId);

      return { ...state, todos: newTodos };
    }),
}));
