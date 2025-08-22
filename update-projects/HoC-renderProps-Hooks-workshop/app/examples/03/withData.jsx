import React, { Component } from "react";

const withData = ({ url, format, dataPath }) => (WrappedComponent) => {
  class withDataComponent extends Component {
    state = {
      data: []
    }

    componentDidMount() {
      fetch(`${url}?format=${format}`)
        .then((res) => res.json())
        .then((res) => this.setState({ data: res[dataPath] }));
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  }

  return withDataComponent;
};

export default withData;
