import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTodoById } from "../../lib/api";

const CustomHook = () => {
  const [selectedTodo, setSelectedTodo] = useState("");
  const updateTodo = (e) => {
    setSelectedTodo(e.target.value);
  };

  const {
    isFetching,
    isSuccess,
    data: todo,
    refetch,
  } = useQuery({
    queryKey: ["todos", selectedTodo],
    queryFn: () => fetchTodoById(selectedTodo),
    enabled: false,
  });

  return (
    <div>
      <h2>Select ToDo</h2>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          refetch();
        }}
      >
        Display Todo: <input type="text" value={selectedTodo} onChange={updateTodo} />
        <button type="submit">Fetch ToDo</button>
      </form>

      {isFetching && <p>Loading...</p>}
      {isSuccess && !isFetching && (
        <ul>
          <li>{todo.done ? <strike>{todo.title}</strike> : <span>{todo.title}</span>}</li>
        </ul>
      )}
    </div>
  );
};

export default CustomHook;
