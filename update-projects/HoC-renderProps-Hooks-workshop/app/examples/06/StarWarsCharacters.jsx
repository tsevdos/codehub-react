import { Component } from "react";
import PropTypes from "prop-types";

class StarWarsCharacters extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/?format=json")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.results }));
  }

  render() {
    return this.props.renderProp(this.state.data);
  }
}

StarWarsCharacters.propTypes = {
  renderProp: PropTypes.func.isRequired
};

export default StarWarsCharacters;
