import AddTodoForm from "./AddTodoForm";
import TodosList from "./TodosList";
import { TodoProvider } from "./TodoContext";

const TodoApp = () => {
  return (
    <TodoProvider>
      <div>
        <h2>My ToDos</h2>
        <hr />
        <AddTodoForm />
        <TodosList />
      </div>
    </TodoProvider>
  );
};

export default TodoApp;
