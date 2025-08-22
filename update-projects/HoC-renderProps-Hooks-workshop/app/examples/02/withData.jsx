import React, { Component } from "react";

const withData = (WrappedComponent) => {
  class withDataComponent extends Component {
    state = {
      data: []
    }

    componentDidMount() {
      fetch("https://swapi.co/api/people/?format=json")
        .then((res) => res.json())
        .then((res) => this.setState({ data: res.results }));
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  }

  return withDataComponent;
};

export default withData;
