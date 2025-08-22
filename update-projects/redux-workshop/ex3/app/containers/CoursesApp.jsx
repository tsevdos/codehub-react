import React, { Component } from "react";
import { fetchCourses } from "../api/api";

class TodoApp extends Component {
  state = {
    courses: null
  };

  async componentDidMount() {
    const courses = await fetchCourses();
    this.setState({ courses });
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
        OK
      </div>
    );
  }
}

export default TodoApp;
