"use client";

import { useEffect, useState } from "react";
import { Todo } from "@/lib/todosStore";

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [editTodo, setEditTodo] = useState<Todo | null>(null);

  // Fetch all todos when the component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  // Fetch todos from the API
  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    const data = await response.json();
    setTodos(data);
  };

  // Handle form submission for adding or updating a todo
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editTodo) {
      // Update todo
      await fetch(`/api/todos/${editTodo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: taskInput, completed: editTodo.completed }),
      });
      setEditTodo(null);
    } else {
      // Add new todo
      await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: taskInput }),
      });
    }
    setTaskInput("");
    fetchTodos(); // Refresh the list
  };

  // Mark a todo as completed
  const handleComplete = async (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    fetchTodos();
  };

  // Delete a todo
  const handleDelete = async (id: number) => {
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    fetchTodos();
  };

  // Set the selected todo for editing
  const handleEdit = (todo: Todo) => {
    setEditTodo(todo);
    setTaskInput(todo.task);
  };

  return (
    <>
      <h1 className="text-4xl mb-4">Todo List</h1>

      {/* Add or Edit Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex space-x-2">
          <input
            className="flex-grow p-2 text-gray-900 rounded"
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Enter todo title"
            required
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded whitespace-nowrap"
            type="submit"
          >
            {editTodo ? "Update Todo" : "Add Todo"}
          </button>
          {editTodo && (
            <button
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded whitespace-nowrap"
              type="button"
              onClick={() => {
                setEditTodo(null);
                setTaskInput("");
              }}
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-2 bg-gray-800 text-gray-100 rounded"
          >
            <span
              className={`cursor-pointer ${todo.completed ? "line-through" : ""}`}
              onClick={() => handleComplete(todo.id)}
            >
              {todo.task}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(todo)}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
