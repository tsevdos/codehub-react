import styled from "react-emotion";
import { border, borderRadius, fontColors } from "../../styles/theme";

export default styled("button")((props) => ({
  padding: "1em",
  border: border,
  borderColor: fontColors[props.type],
  borderRadius: borderRadius,
  background: "cyan"
}));
