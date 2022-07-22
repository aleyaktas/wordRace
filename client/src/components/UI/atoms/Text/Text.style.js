const style = ({ fontSize, fontWeight, color, textDecorationLine, textAlign, letterSpacing, margin, padding, lineHeight }) => ({
  text: {
    fontSize: fontSize || "1.6rem",
    color,
    textDecorationLine,
    textAlign,
    letterSpacing,
    margin: margin || "0px",
    padding,
    fontWeight,
    lineHeight,
  },
});

export default style;
