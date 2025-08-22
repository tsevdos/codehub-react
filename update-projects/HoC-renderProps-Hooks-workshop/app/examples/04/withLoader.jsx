import React, { Component } from "react";
import "./loader.css";

const withLoader = WrappedComponent => {
  class withLoaderComponent extends Component {
    render() {
      const { isLoading } = this.props;

      return isLoading ? (
        <div className="columns is-centered">
          <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  }

  return withLoaderComponent;
};

export default withLoader;
