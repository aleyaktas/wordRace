import React from "react";
import PropTypes from "prop-types";
import style from "./Checkbox.style";
import "../../style.css";

const Checkbox = ({ width, height, size, onChange, checboxColor, font, fontSize, text, textColor, margin, isCheck, className }) => {
  const styles = style({ margin, width, height, size, fontSize, textColor, checboxColor });
  return (
    <div style={styles.container}>
      <input style={styles.input} className={className} onChange={onChange} type="radio" name="input" value={text} checked={isCheck} />
      <label style={styles.label} class={font}>
        {text}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  value: PropTypes.string,
  checboxColor: PropTypes.string,
  color: PropTypes.string,
};

Checkbox.defaultProps = {
  fontSize: "1.6rem",
  size: "1.6rem",
  text: "Checkbox",
  font: "InterRegular",
};

export default Checkbox;
