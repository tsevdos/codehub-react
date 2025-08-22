import styled from "react-emotion";
import { fontColors } from "../../styles/theme";

export default styled("h3")((props) => ({
  margin: 0,
  color: fontColors[props.type],
  fontSize: "1.3em"
}));
