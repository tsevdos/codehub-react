import { type ChangeEvent, type SubmitEvent } from "react";
import { useTodos } from "./TodoContext";

const AddTodoForm = () => {
  const { state, dispatch } = useTodos();

  const updateInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "UPDATE_INPUT", payload: e.target.value });
  };

  const addToDo = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newToDo = { title: state.toDoInput, done: false };

    dispatch({ type: "ADD_TODO", payload: newToDo });
  };

  return (
    <form onSubmit={addToDo}>
      Add ToDo: <input type="text" value={state.toDoInput} onChange={updateInput} />
      <button type="submit">Add ToDo</button>
    </form>
  );
};

export default AddTodoForm;
