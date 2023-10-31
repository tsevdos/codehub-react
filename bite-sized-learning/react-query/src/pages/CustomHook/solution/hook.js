import { useQuery } from "@tanstack/react-query";
import { fetchTodoById } from "../../../lib/api";

export const useFetchTodo = (id) => {
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => fetchTodoById(id),
    enabled: false,
  });
};
