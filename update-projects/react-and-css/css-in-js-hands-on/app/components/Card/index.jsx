import React from "react";
import PropTypes from "prop-types";
import Card from "../../elements/Card";

const ComposedCard = ({ type, bigTitle, title, body, buttonText }) => (
  <Card.Container type={type}>
    {
      bigTitle
        ? <Card.BigTitle type={type}>{title}</Card.BigTitle>
        : <Card.Title type={type}>{title}</Card.Title>
    }
    <Card.Body>{body}</Card.Body>
    <Card.Button type={type}>{buttonText}</Card.Button>
  </Card.Container>
);

ComposedCard.propTypes = {
  type: PropTypes.oneOf(["primary", "info", "warning", "error"]),
  bigTitle: PropTypes.bool,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
};

ComposedCard.defaultProps = {
  bigTitle: false,
  type: "primary"
};

export default ComposedCard;
