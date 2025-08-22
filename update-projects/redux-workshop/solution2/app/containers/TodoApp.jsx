import React from "react";
import { connect } from "react-redux";
import { getUsernames } from "../store/store";

const TodoApp = ({ usernames }) => (
  <div className="container">
    <h2>Users</h2>
    <hr />
    {usernames.map((username) => <div key={username}>Hello {username}</div>)}
  </div>
);

const mapStateToProps = (state) => ({
  usernames: getUsernames(state)
});

export default connect(mapStateToProps)(TodoApp);
