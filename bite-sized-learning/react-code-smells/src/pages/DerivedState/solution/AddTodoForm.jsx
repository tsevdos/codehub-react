import { useState } from "react";

const todoCategories = [
  {
    title: "Work",
    value: "work",
  },
  {
    title: "Home",
    value: "home",
  },
];

const AddTodoForm = ({ todos, setTodos }) => {
  const [toDoInput, setToDoInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("work");

  const updateCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const updateInput = (e) => {
    setToDoInput(e.target.value);
  };

  const addToDo = (e) => {
    e.preventDefault();
    const newToDo = {
      title: toDoInput,
      done: false,
      category: selectedCategory,
    };
    setToDoInput("");
    setTodos([...todos, newToDo]);
  };

  return (
    <form onSubmit={addToDo}>
      Add ToDo: <input type="text" value={toDoInput} onChange={updateInput} />
      <select name="category" value={selectedCategory} onChange={updateCategory}>
        {todoCategories.map(({ title, value }) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </select>
      <button type="submit">Add ToDo</button>
    </form>
  );
};

export default AddTodoForm;
