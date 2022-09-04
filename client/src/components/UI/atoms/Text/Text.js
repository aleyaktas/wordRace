import React from "react";
import "../../../../App.css";
import PropTypes from "prop-types";
import style from "./Text.style";

const Text = ({ className, text, opacity, font, fontSize, fontWeight, color, textDecorationLine, textAlign, letterSpacing, lineHeight, padding, margin }) => {
  const styles = style({ fontSize, fontWeight, opacity, color, textDecorationLine, textAlign, letterSpacing, lineHeight, margin, padding });

  return (
    <p style={styles.text} className={`${font} ${className}`}>
      {text}
    </p>
  );
};

Text.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  textDecorationLine: PropTypes.string,
};
Text.defaultProps = {
  color: "black",
  font: "InterRegular",
};

export default Text;
