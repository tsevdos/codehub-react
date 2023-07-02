import React from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;

const CharactersList = ({ characters }) => (
  <div>
    <Title>SSC 02: Stateful and stateless components</Title>
    <hr />
    <div className="characters-container">
      {Boolean(characters.length) &&
        characters.map(({ id, name, culture, isFemale }) => (
          <Card type="inner" key={id} title={name}>
            <p>
              {culture} / {isFemale ? "female" : "male"}
            </p>
          </Card>
        ))}
    </div>
  </div>
);

export default CharactersList;
