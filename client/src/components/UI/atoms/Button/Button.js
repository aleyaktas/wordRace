import React from 'react'
import Icon from '../../../../assets/icons/Icon'
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import '../../../../../src/App.css'

const ButtonItem = ({ iconPosition, border, borderColor, outlined, fontFace, icon, size, buttonColor, fontSize, textColor, width, height, text, iconName, iconColor, iconWidth, iconHeight, padding, margin }) => {
  
  if(size==="sm") {
    fontSize= 12
    padding= "10 16"
  } else if(size==="md") {
    fontSize= 14
    padding= "11 20"
  } else if(size==="lg") {
    fontSize= 16
    padding= "12 24"
  }
  if(outlined==false) border="none"
  
  const CustomizedButton = styled(Button)({
    fontSize,
    padding,
    border,
    backgroundColor: buttonColor,
    borderColor,
    width,
    height,
    margin,
    color: textColor,
    borderRadius: 10
  });
  
  if(icon & iconPosition=='start') {
    var startIcon= <Icon style={{display:'inline-flex !important'}} name={iconName} width={iconWidth} height={iconHeight} color={iconColor}/>
  } else if (icon & iconPosition=='end'){
    var endIcon = <Icon style={{display:'inline-flex !important'}} name={iconName} width={iconWidth} height={iconHeight} color={iconColor}/>
  } else {
    startIcon=''
    endIcon=''
  }

  return (  
    <div style={{display: 'flex'}}>
        <CustomizedButton
          className={fontFace ? `${fontFace}` : null }
          startIcon={startIcon}
          endIcon={endIcon}
        >
          {text}
        </CustomizedButton>
    </div>
  )
}

ButtonItem.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.bool,
  buttonColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  iconColor: PropTypes.string,
  outlined: PropTypes.bool,
  borderColor: PropTypes.string,
  iconPosition: PropTypes.oneOf(["start", 'end']),
};

ButtonItem.defaultProps = {
  buttonColor: null,
  iconColor: null,
  size: 'md',
  border: '1px solid',
  icon: false,
  iconWidth: 16,
  iconHeight:16,
  iconPosition: 'end',
  textColor: "#6B5814",
};

export default ButtonItem