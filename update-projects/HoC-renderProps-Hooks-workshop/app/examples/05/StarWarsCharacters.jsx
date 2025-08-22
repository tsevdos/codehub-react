import React, { Component } from "react";

class StarWarsCharacters extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/?format=json")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.results }));
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h2 className="is-size-4">Render props</h2>
        <h3 className="is-size-5">05: Starting Point</h3>
        <br/>
        <ul>
          {
            Boolean(data.length) &&
              data.map(({ name, gender }) => (
                <div key={name}>
                  <h3 className="is-size-5">{name}</h3>
                  <p>gender: {gender}</p>
                </div>
              ))
          }
        </ul>
      </div>
    );
  }
}

export default StarWarsCharacters;
