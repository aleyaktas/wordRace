const style = ({ width, height, padding, margin, border, borderColor, borderRadius, iconPosition, textPosition, buttonColor, iconSize }) => ({
  button: {
    display: "flex",
    position: "relative",
    justifyContent: textPosition || "center",
    flexDirection: iconPosition === "left" ? "row-reverse" : "",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "1.6rem",
    width,
    height,
    padding: padding,
    margin: margin || "0",
    border: border || "none",
    borderStyle: "none",
    borderColor,
    borderRadius,
    backgroundColor: buttonColor,
  },
  icon: {
    position: iconPosition == "left" || iconPosition == "right" ? "" : "absolute",
    left: iconPosition === "start" ? "1rem" : undefined,
    right: iconPosition === "end" ? "1rem" : undefined,
    width: iconSize || "2.4rem",
    height: iconSize || "2.4rem",
  },
});

export default style;
