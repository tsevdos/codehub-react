import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo, toggleTodo } from "../actions/todosActions";
import { updateInput } from "../actions/inputActions";
import { changeFilter } from "../actions/filterActions";
import TodoItem from "../components/TodoItem";
import { ALL, PENDING, DONE } from "../constants/filterTypes";

function getFilteredTodos(todos, filter) {
  if (filter === PENDING) {
    return todos.filter(todo => !todo.done);
  } else if (filter === DONE) {
    return todos.filter(todo => todo.done);
  }

  return todos;
}

class TodoApp extends Component {
  addToDo = e => {
    e.preventDefault();
    const { todos, input, addTodo } = this.props;
    const todo = { id: todos.length + 1, title: input, done: false };

    addTodo(todo);
  };

  render() {
    const {
      // todos,
      filteredTodos,
      input,
      filter,
      toggleTodo,
      updateInput,
      changeFilter
    } = this.props;
    // let filteredTodos;
    // if (filter === PENDING) {
    //   filteredTodos = todos.filter((todo) => !todo.done);
    // } else if (filter === DONE) {
    //   filteredTodos = todos.filter((todo) => todo.done);
    // } else {
    //   filteredTodos = todos;
    // }
    // const filteredTodos = getFilteredTodos(todos, filter);

    return (
      <div className="container">
        <h2>My ToDos</h2>
        <hr />
        <div className="buttons are-small">
          <button
            onClick={() => changeFilter(ALL)}
            className={`button ${filter === ALL && "is-dark"}`}
          >
            ALL
          </button>
          <button
            onClick={() => changeFilter(PENDING)}
            className={`button ${filter === PENDING && "is-dark"}`}
          >
            Pending
          </button>
          <button
            onClick={() => changeFilter(DONE)}
            className={`button ${filter === DONE && "is-dark"}`}
          >
            Done
          </button>
        </div>
        <ul>
          {filteredTodos.map(todo => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
        <form onSubmit={this.addToDo}>
          Add ToDo:{" "}
          <input
            value={input}
            onChange={e => updateInput(e.target.value)}
            type="text"
          />
          <button type="submit">Add ToDo</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // todos: state.todos,
  filteredTodos: getFilteredTodos(state.todos, state.filter),
  input: state.input,
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  addTodo: bindActionCreators(addTodo, dispatch),
  toggleTodo: bindActionCreators(toggleTodo, dispatch),
  updateInput: bindActionCreators(updateInput, dispatch),
  changeFilter: bindActionCreators(changeFilter, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
