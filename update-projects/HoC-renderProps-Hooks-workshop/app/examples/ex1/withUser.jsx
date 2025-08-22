import React, { Component } from "react";

const withUser = (WrappedComponent) => {
  class withUserComponent extends Component {
    state = {
      user: null,
    }

    componentDidMount() {
      if (!localStorage.getItem("user")) {
        fetch("https://api.myjson.com/bins/nkbdu")
          .then((res) => res.json())
          .then((user) => {
            localStorage.setItem("user", JSON.stringify(user));
            this.setState({ user });
          });
      } else {
        this.setState({ user: JSON.parse(localStorage.getItem("user")) });
      }
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  }

  return withUserComponent;
};

export default withUser;
