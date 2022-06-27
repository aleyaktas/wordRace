import React from "react";
import "../../../../App.css";
import PropTypes from "prop-types";
import style from "./Text.style";

const Text = ({ text, font, fontSize, fontWeight, color, textDecorationLine, textAlign, letterSpacing, padding, margin }) => {
  const styles = style({ fontSize, fontWeight, color, textDecorationLine, textAlign, letterSpacing, margin, padding });

  return (
    <p style={styles.text} className={font}>
      {text}
    </p>
  );
};

Text.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  textDecorationLine: PropTypes.string,
};
Text.defaultProps = {
  color: "black",
  font: "InterRegular",
};

export default Text;
