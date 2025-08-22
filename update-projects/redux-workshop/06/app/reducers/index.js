import { combineReducers } from "redux";
import TodosReducer from "./TodosReducer";
import InputReducer from "./InputReducer";
import FilterReducer from "./FilterReducer";
import { PENDING, DONE } from "../constants/filterTypes";

const rootReducer = combineReducers({
  todos: TodosReducer,
  input: InputReducer,
  filter: FilterReducer
});

export default rootReducer;

export function getFilteredTodos(todos, filter) {
  if (filter === PENDING) {
    return todos.filter((todo) => todo.done === false);
  } else if (filter === DONE) {
    return todos.filter((todo) => todo.done === true);
  }

  return todos;
}
