const style = ({ fontSize, fontWeight, color, textDecorationLine, textAlign, letterSpacing, margin, padding }) => ({
  text: {
    fontSize: fontSize || "1.6rem",
    color,
    textDecorationLine,
    textAlign,
    letterSpacing,
    margin: margin || "0px",
    padding,
    fontWeight,
  },
});

export default style;
