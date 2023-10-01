import { useState } from "react";

const AddTodoForm = ({ todos, setTodos }) => {
  const [toDoInput, setToDoInput] = useState("");

  const updateInput = (e) => {
    setToDoInput(e.target.value);
  };

  const addToDo = (e) => {
    e.preventDefault();
    const newToDo = {
      title: toDoInput,
      done: false,
    };
    setToDoInput("");
    setTodos([...todos, newToDo]);
  };

  return (
    <form onSubmit={addToDo}>
      Add ToDo: <input type="text" value={toDoInput} onChange={updateInput} />
      <button type="submit">Add ToDo</button>
    </form>
  );
};

export default AddTodoForm;
