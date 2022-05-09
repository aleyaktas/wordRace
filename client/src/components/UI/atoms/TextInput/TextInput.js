import * as React from 'react';
import './style.css'
import Icon from '../../../../assets/icons/Icon'
import PropTypes from 'prop-types';
import '../../../../App.css'

const TextInput = ({size, padding, margin, border, textColor, placeHolder, containerWidth, iconName, iconWidth, iconHeight, iconColor, icon, font}) => {
  const style = {
    fontSize:size,
    padding,
    margin,
    border,
    color: textColor,
  }
  return (
    <div className='container' style={{width:containerWidth}}>
      {icon && <Icon name={iconName} width={iconWidth} height={iconHeight} color={iconColor}  />}
      <input class={font} style={style} type="text" name="firstname" placeholder={placeHolder}/>
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
  containerWidth: "15%",
  iconName:"User",
};

export default TextInput