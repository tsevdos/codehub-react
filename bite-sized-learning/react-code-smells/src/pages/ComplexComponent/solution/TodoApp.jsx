import AddTodoForm from "./AddTodoForm";
import TodosList from "./TodosList";
import useFetchTodos from "./useFetchTodos";

const TodoApp = () => {
  const [todos, setTodos] = useFetchTodos();

  return (
    <div>
      <h2>My ToDos</h2>
      <hr />
      <AddTodoForm todos={todos} setTodos={setTodos} />
      <TodosList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoApp;
