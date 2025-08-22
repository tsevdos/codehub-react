import { combineReducers } from "redux";
import TodosReducer from "./TodosReducer";
import InputReducer from "./InputReducer";
import FilterReducer from "./FilterReducer";

const rootReducer = combineReducers({
  todos: TodosReducer,
  input: InputReducer,
  filter: FilterReducer
});

export default rootReducer;
