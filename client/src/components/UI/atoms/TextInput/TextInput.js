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
  icon,
  font,
  type,
  className,
  onChange,
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
      {icon && <Icon name={iconName} width={iconWidth} height={iconHeight} color={iconColor} />}
      <input name={placeHolder.toLowerCase()} type={type} class={`${font} ${className}`} style={styles.input} placeholder={placeHolder} onChange={onChange} />
    </div>
  );
};

TextInput.propTypes = {
  placeHolder: PropTypes.string,
  size: PropTypes.number,
  icon: PropTypes.bool,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
};
TextInput.defaultProps = {
  size: 14,
  icon: false,
  font: "InterRegular",
  placeHolder: "placeHolder",
  iconName: "User",
};

export default TextInput;
