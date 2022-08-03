const style = ({ margin, width, height, size, checkboxColor, textColor, fontSize }) => ({
  container: {
    display: "flex",
    alignItems: "center",
    width,
    height,
    margin: margin,
    justifyContent: "center",
  },
  input: {
    accentColor: checkboxColor || "black",
    width: size,
    height: size,
    margin: "0 0.2rem 0 0",
  },
  label: {
    color: textColor,
    fontSize,
  },
});

export default style;
