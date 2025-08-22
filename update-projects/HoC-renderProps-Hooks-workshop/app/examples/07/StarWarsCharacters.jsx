import { Component } from "react";
import PropTypes from "prop-types";

class StarWarsCharacters extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    const { url, format, dataPath } = this.props;

    fetch(`${url}?format=${format}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res[dataPath] }));
  }

  render() {
    return this.props.render(this.state.data);
  }
}

StarWarsCharacters.propTypes = {
  url: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  dataPath: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired
};

export default StarWarsCharacters;
