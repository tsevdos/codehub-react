import { useQuery } from "@tanstack/react-query";
import { fetchUserTodos, fetchUser } from "../../../lib/api";

export const useFetchUserTodos = (username) => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchUserTodos(username),
    enabled: Boolean(username),
  });
};

export const useFetchUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
};
