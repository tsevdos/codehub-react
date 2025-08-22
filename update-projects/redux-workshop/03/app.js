function TodoItem({ title, done, index, toggleDone }) {
  return (
    <li>
      <input type="checkbox" checked={done} onChange={() => toggleDone(index)} />&nbsp;
      { done ? <strike>{title}</strike> : <span>{title}</span> }
    </li>
  )
};

class TodoApp extends React.Component {
  state = {
    toDoInput: "",
    todos: [
      {
        title: "Learn React",
        done: false
      },
      {
        title: "Go to Code.Hub",
        done: true
      },
      {
        title: "Go out for a drink",
        done: false
      }
    ]
  };

  toggleDone = (index) => {
    const newTodos = [...this.state.todos];
    newTodos[index].done = !newTodos[index].done;

    this.setState({ todos: newTodos });
  }

  updateInput = (event) => {
    this.setState({ toDoInput: event.target.value });
  }

  addToDo = (e) => {
    e.preventDefault();
    const newToDo = {
      title: this.state.toDoInput,
      done: false
    }
    const newTodos = [...this.state.todos, newToDo];

    this.setState({ todos: newTodos, toDoInput: "" });
  }

  render() {
    const { todos, toDoInput } = this.state;

    return (
      <div>
        <h2>My ToDos</h2>
        <ul>
          {
            todos.map((todo, index) => <TodoItem
              key={todo.title} {...todo}
              index={index}
              toggleDone={this.toggleDone}
            />
            )
          }
        </ul>
        <form onSubmit={this.addToDo}>
          Add ToDo: <input value={toDoInput} onChange={this.updateInput} type="text" />
          <button type="submit">Add ToDo</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('app'));
