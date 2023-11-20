import TodosService from "../api/todosService";

export const getHtmlTodo = async (todoId) => {
  const { id, title, user, done } = await TodosService.fetchTodoById(todoId);

  return `<a href="path/to/${id}">${title} (${user}) - ${
    done ? "👍" : "👎"
  }</a>`;
};
