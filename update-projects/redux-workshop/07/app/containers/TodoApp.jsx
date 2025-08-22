import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo, toggleTodo } from "../actions/todosActions";
import { updateInput } from "../actions/inputActions";
import { changeInput } from "../actions/filterActions";
import TodoItem from "../components/TodoItem";
import { ALL, PENDING, DONE } from "../constants/filterTypes";
import { getFilter } from "../reducers/FilterReducer";
import { getTodos } from "../reducers/TodosReducer";
import { getFilteredTodos } from "../reducers/index";

class TodoApp extends Component {
  addToDo = (e) => {
    e.preventDefault();
    const { input, addTodo } = this.props;
    const todo = { id: Math.random().toString(36).substr(2, 9), title: input, done: false };

    addTodo(todo);
  }

  render() {
    const { filteredTodos, input, filter, toggleTodo, updateInput, changeInput } = this.props;

    return (
      <div className="container">
        <h2>My ToDos</h2>
        <hr />
        <div className="buttons are-small">
          <button onClick={() => changeInput(ALL) } className={`button ${filter === ALL && "is-dark"}`}>ALL</button>
          <button onClick={() => changeInput(PENDING) } className={`button ${filter === PENDING && "is-dark"}`}>Pending</button>
          <button onClick={() => changeInput(DONE) } className={`button ${filter === DONE && "is-dark"}`}>Done</button>
        </div>
        <ul>
          {
            filteredTodos.map(
              (todo) => <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
            )
          }
        </ul>
        <form onSubmit={this.addToDo}>
        Add ToDo: <input value={input} onChange={(e) => updateInput(e.target.value)} type="text" />
          <button type="submit">Add ToDo</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filteredTodos: getFilteredTodos(state),
  input: state.input,
  filter: getFilter(state)
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: bindActionCreators(addTodo, dispatch),
  toggleTodo: bindActionCreators(toggleTodo, dispatch),
  updateInput: bindActionCreators(updateInput, dispatch),
  changeInput: bindActionCreators(changeInput, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
