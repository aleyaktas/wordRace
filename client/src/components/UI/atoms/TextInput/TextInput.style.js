const style = ({ fontSize, padding, margin, border, width, textColor, backgroundColor }) => ({
  container: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #ccc",
    padding,
    margin,
    width: "-webkit-fill-available",
  },
  input: {
    fontSize,
    width: width || "100%",
    border: border || "none",
    color: textColor,
    backgroundColor,
    backgroundColor,
  },
});

export default style;
