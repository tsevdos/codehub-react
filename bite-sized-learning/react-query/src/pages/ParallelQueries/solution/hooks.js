import { useQuery } from "@tanstack/react-query";
import { fetchTodos, fetchUser } from "../../../lib/api";

export const useFetchTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};

export const useFetchUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
};
