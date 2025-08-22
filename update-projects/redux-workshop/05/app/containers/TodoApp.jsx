import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo, toggleTodo, fetchTodos } from "../actions/todosActions";
import { updateInput } from "../actions/inputActions";
import TodoItem from "../components/TodoItem";

class TodoApp extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  updateInput = (e) => {
    this.props.updateInput(e.target.value);
  }

  addToDo = (e) => {
    e.preventDefault();
    const { todos, input, addTodo } = this.props;
    const todo = { id: todos.length + 1, title: input, done: false };

    addTodo(todo);
  }

  render() {
    const { todos, isLoading, hasError, input, toggleTodo } = this.props;

    return (
      <div className="container">
        <h2>My ToDos</h2>
        <hr />
        {
          isLoading
            ? <h5>Loading...</h5>
            : <ul>
              {
                todos.map(
                  (todo) => <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
                )
              }
            </ul>
        }
        { (hasError && !isLoading) && <h5>Cannot fetch todos 😢</h5> }
        <form onSubmit={this.addToDo}>
        Add ToDo: <input value={input} onChange={this.updateInput} type="text" />
          <button type="submit">Add ToDo</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.items,
  isLoading: state.todos.isLoading,
  hasError: state.todos.hasError,
  input: state.input
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: bindActionCreators(fetchTodos, dispatch),
  addTodo: bindActionCreators(addTodo, dispatch),
  toggleTodo: bindActionCreators(toggleTodo, dispatch),
  updateInput: bindActionCreators(updateInput, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
