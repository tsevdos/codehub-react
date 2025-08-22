import React from "react";
import PropTypes from "prop-types";
import { container, title } from "./styles.css";

const Alert = ({ msg }) => (
  <div className={container}>
    <h3 className={title}>{msg}</h3>
  </div>
);

Alert.propTypes = {
  type: PropTypes.oneOf(["primary", "info", "warning", "error"]),
  msg: PropTypes.string.isRequired
};

Alert.defaultProps = {
  type: "primary"
};

export default Alert;
