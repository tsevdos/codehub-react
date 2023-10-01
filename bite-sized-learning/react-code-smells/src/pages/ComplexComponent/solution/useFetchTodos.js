import { useState, useEffect } from "react";

const useFetchTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.npoint.io/7b0685d9058f9f9c0aa4");
      const data = await response.json();
      setTodos(data);
    };

    fetchData();
  }, []);

  return [todos, setTodos];
};

export default useFetchTodos;
