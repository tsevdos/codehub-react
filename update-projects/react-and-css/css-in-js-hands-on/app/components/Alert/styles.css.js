import { css } from "emotion";
import { border, borderRadius, bgColors, fontColors } from "../../styles/theme";

export const container = css({
  margin: "0 0 1em",
  padding: "1em 2em",
  border: border,
  borderColor: fontColors.primary,
  borderRadius: borderRadius,
  background: bgColors.primary
});

export const title = css({
  margin: 0,
  color: fontColors.primary,
  fontSize: "1.3em"
});
