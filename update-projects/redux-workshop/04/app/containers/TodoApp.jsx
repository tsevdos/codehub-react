import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo, toggleTodo } from "../actions/todosActions";
import { updateInput } from "../actions/inputActions";
import TodoItem from "../components/TodoItem";

class TodoApp extends Component {
  // updateInput = (e) => {
  //   this.props.updateInput(e.target.value);
  // }
  // Q. Ask how we can remove this action

  addToDo = e => {
    e.preventDefault();
    const { todos, input, addTodo } = this.props;
    const todo = { id: todos.length + 1, title: input, done: false };

    addTodo(todo);
  };

  render() {
    const { todos, input, toggleTodo } = this.props;

    return (
      <div className="container">
        <h2>My ToDos</h2>
        <hr />
        <ul>
          {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
        <form onSubmit={this.addToDo}>
          Add ToDo:{" "}
          <input
            value={input}
            onChange={e => this.props.updateInput(e.target.value)}
            type="text"
          />
          <button type="submit">Add ToDo</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  input: state.input
});

const mapDispatchToProps = dispatch => ({
  addTodo: bindActionCreators(addTodo, dispatch),
  toggleTodo: bindActionCreators(toggleTodo, dispatch),
  updateInput: bindActionCreators(updateInput, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
