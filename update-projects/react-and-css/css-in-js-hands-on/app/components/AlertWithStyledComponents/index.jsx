import React from "react";
import PropTypes from "prop-types";
import Alert from "../../elements/Alert";

const AlertWithStyledComponents = ({ type, msg, bigTitle }) => (
  <Alert.Container type={type}>
    {
      bigTitle
        ? <Alert.BigTitle type={type}>{msg}</Alert.BigTitle>
        : <Alert.Title type={type}>{msg}</Alert.Title>
    }

  </Alert.Container>
);

AlertWithStyledComponents.propTypes = {
  bigTitle: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "info", "warning", "error"]),
  msg: PropTypes.string.isRequired
};

AlertWithStyledComponents.defaultProps = {
  bigTitle: false,
  type: "primary"
};

export default AlertWithStyledComponents;
