import React, { Component } from "react";
import { connect } from "react-redux";

class TodoApp extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className="container">
        <h2>Users</h2>
        <hr />
        {
          users.map(({ name, surname, male }, i) => {
            const title = male ? "Mr." : "Mrs.";
            const username = `${title} ${name} ${surname}`;

            return <div key={i}>Hello {username}</div>;
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state
});

export default connect(mapStateToProps)(TodoApp);
