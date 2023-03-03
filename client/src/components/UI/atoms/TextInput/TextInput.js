import * as React from "react";
import "../../style.css";
import Icon from "../../../../assets/icons/Icon";
import PropTypes from "prop-types";
import "../../../../App.css";
import style from "./TextInput.style";

const TextInput = ({
  fontSize,
  backgroundColor,
  width,
  padding,
  margin,
  border,
  textColor,
  placeHolder,
  iconName,
  iconWidth,
  iconHeight,
  iconColor,
  font,
  type,
  className,
  onChange,
  onKeyDown,
  onBlur,
  value,
}) => {
  const styles = style({
    fontSize,
    padding,
    margin,
    border,
    width,
    textColor,
    backgroundColor,
  });

  return (
    <div style={styles.container}>
      {iconName && <Icon name={iconName} width={iconWidth} height={iconHeight} color={iconColor} />}
      <input
        onBlur={onBlur}
        value={value}
        name={placeHolder.toLowerCase()}
        type={type}
        className={`${font} ${className}`}
        style={styles.input}
        placeholder={placeHolder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

TextInput.propTypes = {
  placeHolder: PropTypes.string,
  size: PropTypes.number,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
};
TextInput.defaultProps = {
  size: 14,
  font: "InterRegular",
  placeHolder: "placeHolder",
};

export default TextInput;
