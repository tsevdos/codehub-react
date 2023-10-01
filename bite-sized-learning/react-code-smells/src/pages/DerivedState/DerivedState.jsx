import { useState, useEffect } from "react";

const initialTodos = [
  { done: false, title: "Learn React", category: "work" },
  { done: true, title: "Go to Code.Hub", category: "work" },
  { done: true, title: "Go out for a drink", category: "home" },
  { done: true, title: "Learn JavaScript", category: "work" },
  { done: true, title: "Learn TypeScript", category: "work" },
  { done: true, title: "Do the laundry", category: "home" },
  { done: false, title: "Prepare Christmas party", category: "home" },
];

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

const DerivedState = () => {
  const [toDoInput, setToDoInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("work");
  const [todos, setTodos] = useState(initialTodos);

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

  const [workTodos, setWorkTodos] = useState([]);
  const [homeTodos, setHomeTodos] = useState([]);
  const [totalTodos, setTotalTodos] = useState(0);
  const [doneTodos, setDoneTodos] = useState(0);
  const [totalWorkTodos, setTotalWorkTodos] = useState(0);
  const [doneWorkTodos, setDoneWorkTodos] = useState(0);
  const [totalHomeTodos, setTotalHomeTodos] = useState(0);
  const [doneHomeTodos, setDoneHomeTodos] = useState(0);

  useEffect(() => {
    const wTodos = todos.filter(({ category }) => category === "work");
    setWorkTodos(wTodos);
  }, [todos]);

  useEffect(() => {
    const hTodos = todos.filter(({ category }) => category === "home");
    setHomeTodos(hTodos);
  }, [todos]);

  useEffect(() => {
    setTotalTodos(todos.length);
  }, [todos]);

  useEffect(() => {
    const noOfDoneTodos = todos.filter(({ done }) => done).length;
    setDoneTodos(noOfDoneTodos);
  }, [todos]);

  useEffect(() => {
    const noOfWorkTodos = todos.filter(({ category }) => category === "work").length;
    setTotalWorkTodos(noOfWorkTodos);
  }, [todos]);

  useEffect(() => {
    const noOfDoneWorkTodos = todos.filter(
      ({ category, done }) => category === "work" && done,
    ).length;
    setDoneWorkTodos(noOfDoneWorkTodos);
  }, [todos]);

  useEffect(() => {
    const noOfHomeTodos = todos.filter(({ category }) => category === "home").length;
    setTotalHomeTodos(noOfHomeTodos);
  }, [todos]);

  useEffect(() => {
    const noOfDoneHomeTodos = todos.filter(
      ({ category, done }) => category === "home" && done,
    ).length;
    setDoneHomeTodos(noOfDoneHomeTodos);
  }, [todos]);

  return (
    <div>
      <h2>My ToDos</h2>
      <hr />
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
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3>
            All ToDos ({doneTodos}/{totalTodos})
          </h3>
          <ul>
            {todos.map(({ title, done }) => (
              <li key={title}>
                <label>{done ? <strike>{title}</strike> : <span>{title}</span>}</label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>
            Work ToDos ({doneWorkTodos}/{totalWorkTodos})
          </h3>
          <ul>
            {workTodos.map(({ title, done }) => (
              <li key={title}>
                <label>{done ? <strike>{title}</strike> : <span>{title}</span>}</label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>
            Home ToDos ({doneHomeTodos}/{totalHomeTodos})
          </h3>
          <ul>
            {homeTodos.map(({ title, done }) => (
              <li key={title}>
                <label>{done ? <strike>{title}</strike> : <span>{title}</span>}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DerivedState;
