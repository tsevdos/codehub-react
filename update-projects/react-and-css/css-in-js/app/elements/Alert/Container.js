import styled from "react-emotion";
import { border, borderRadius, bgColors, fontColors } from "../../styles/theme";

export default styled("div")((props) => ({
  margin: "0 0 1em",
  padding: "1em 2em",
  border: border,
  borderColor: fontColors[props.type],
  borderRadius: borderRadius,
  background: bgColors[props.type]
}));
