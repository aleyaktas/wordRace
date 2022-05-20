import * as React from 'react';
import './style.css'
import Icon from '../../../../assets/icons/Icon'
import PropTypes from 'prop-types';
import '../../../../App.css'

const TextInput = ({containerMargin, containerPadding, containerWidth,containerBorderRadius, fontSize, placeHolderSize, backgroundColor, padding, margin, border, textColor, placeHolder, overflow, iconName, iconWidth, iconHeight, iconColor, icon, font, type}) => {
  const style = {
    fontSize,
    padding,
    margin,
    border,
    color: textColor,
    '--placeHolderSize': placeHolderSize,
    backgroundColor,
  }
  return (
    <div className='container' style={{width:containerWidth, margin:containerMargin, padding: containerPadding, borderRadius: containerBorderRadius, overflow}}>
      {icon && <Icon name={iconName} width={iconWidth} height={iconHeight} color={iconColor}  />}
      <input id='input' type={type} class={font} style={style} name="firstname" placeholder={placeHolder} />
    </div>
  )
}

TextInput.propTypes = {
  placeHolder: PropTypes.string,
  size: PropTypes.number,
  icon: PropTypes.bool,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number
};
TextInput.defaultProps = {
  size: 14,
  icon: false,
  font:"InterRegular",
  placeHolder: "placeHolder",
  // containerWidth: "15%",
  iconName:"User",
};

export default TextInput