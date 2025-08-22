import React, { Component } from "react";

const withData = ({ url, format, dataPath }) => (WrappedComponent) => {
  class withDataComponent extends Component {
    state = {
      data: [],
      isLoading: true
    }

    componentDidMount() {
      fetch(`${url}?format=${format}`)
        .then((res) => res.json())
        .then((res) => this.setState({ data: res[dataPath], isLoading: false }));
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  }

  return withDataComponent;
};

export default withData;
