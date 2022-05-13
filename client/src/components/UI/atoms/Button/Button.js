import React from 'react'
import Icon from '../../../../assets/icons/Icon'
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import '../../../../../src/App.css'

const ButtonItem = ({ iconPosition, border, borderColor, borderRadius, outlined, fontFace, icon, size, buttonColor, fontSize, textColor, width, height, text, iconName, iconColor, iconWidth, iconHeight, padding, margin, textAlign, onClick, containerMargin }) => {
  
  if(size==="sm") {
    fontSize= 12 
    padding= "2px 4px "
  } else if(size==="md") {
    fontSize= 14
    padding= "4px 8px"
  } else if(size==="lg") {
    fontSize= 16
    padding= "8px 16px"
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
    borderRadius,
    textTransform: 'none',
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
    <div style={{textAlign:`${textAlign}`, margin: `${containerMargin}`}}>
        <CustomizedButton
          className={fontFace ? `${fontFace}` : null }
          startIcon={startIcon}
          endIcon={endIcon}
          onClick={onClick}
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
  text:"Button",
  buttonColor: null,
  iconColor: null,
  border: '1px solid',
  icon: false,
  iconWidth: 16,
  iconHeight:16,
  iconPosition: 'end',
  textColor: "#6B5814",
};

export default ButtonItem