import TodosService from "../api/todosService";

// display user todos
export const getHTMLUserTodos = async (user) => {
  const todos = await TodosService.fetchUserTodos(user);
  const listItemsHTML = todos.map(({ title }) => `<li>${title}</li>`).join("");

  return `<ul>${listItemsHTML}</ul>`;
};
