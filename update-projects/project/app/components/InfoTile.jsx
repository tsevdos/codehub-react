import React from "react";
import PropTypes from "prop-types";
import { Panel, Badge } from "react-bootstrap";

const InfoTile = ({ amount, title }) => (
  <div>
    <Panel>
      <Panel.Body>{ title.toUpperCase() }: <Badge pullRight>{ amount }</Badge></Panel.Body>
    </Panel>
  </div>
);

InfoTile.propTypes = {
  amount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default InfoTile;
