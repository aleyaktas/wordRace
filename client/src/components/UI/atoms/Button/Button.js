import React from "react";
import Icon from "../../../../assets/icons/Icon";
import PropTypes from "prop-types";
import style from "./Button.styles";
import Text from "../Text/Text";
import "../../style.css";

const Button = ({
  width,
  height,
  padding,
  margin,
  buttonColor,
  border,
  borderColor,
  borderRadius,
  fontSize,
  fontWeight,
  font,
  text,
  textPosition,
  textColor,
  letterSpacing,
  icon,
  iconPosition,
  iconName,
  iconColor,
  iconSize,
  onClick,
  className,
  textMargin,
}) => {
  const styles = style({
    width,
    height,
    padding,
    margin,
    border,
    borderColor,
    borderRadius,
    iconPosition,
    iconSize,
    buttonColor,
    iconPosition,
    textPosition,
  });

  return (
    <div style={styles.container}>
      <button style={styles.button} className={className} onClick={onClick}>
        <Text text={text} margin={textMargin} font={font} fontWeight={fontWeight} fontSize={fontSize} color={textColor} letterSpacing={letterSpacing} />
        {icon && <Icon style={styles.icon} name={iconName} width={iconSize} height={iconSize} color={iconColor} />}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.bool,
  buttonColor: PropTypes.string,
  iconColor: PropTypes.string,
  borderColor: PropTypes.string,
  iconPosition: PropTypes.oneOf(["start", "end", "left", "right"]),
};

Button.defaultProps = {
  text: "Button",
  buttonColor: null,
  border: "1px solid gray",
  icon: false,
  iconName: "User",
  // iconPosition: "end",
  textColor: "#6B5814",
};

export default Button;
