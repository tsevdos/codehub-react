import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../../../lib/api";

const BasicGETExample = () => {
  const { status, data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  return (
    <div>
      <h2>My ToDos (Get request)</h2>
      <hr />
      {status === "pending" && <p>Loading...</p>}
      {status === "error" && <p>Something went wrong! Please try again...</p>}
      {status === "success" && (
        <ul>
          {todos.map(({ title, done }) => (
            <li key={title}>{done ? <strike>{title}</strike> : <span>{title}</span>}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BasicGETExample;
