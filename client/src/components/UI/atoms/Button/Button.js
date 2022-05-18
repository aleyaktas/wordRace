import React from 'react'
import Icon from '../../../../assets/icons/Icon'
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import '../../../../../src/App.css';
import { makeStyles } from '@mui/styles';


const ButtonItem = ({ iconPosition, border, borderColor, borderRadius, outlined, fontt="RobotoThinItalic", icon, size, buttonColor, fontSize, textColor, width, height, text, iconName, iconColor, iconWidth, iconHeight, padding, margin, textAlign, onClick, containerMargin, hoverTextColor, hoverBackgroundColor }) => {
  
  if(size==="sm") {
    fontSize= 12 
    padding= "2px 4px "
  } else if(size==="md") {
    fontSize= 16
    padding= "4px 8px"
  } else if(size==="lg") {
    fontSize= 18
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
  const useStyles = makeStyles({
    button: {
      '&:hover': {
        backgroundColor: hoverBackgroundColor,
        color: hoverTextColor,
    },
  }})
  
  if(icon & iconPosition=='start') {
    var startIcon= <Icon style={{display:'inline-flex !important'}} name={iconName} width={iconWidth} height={iconHeight} color={iconColor}/>
  } else if (icon & iconPosition=='end'){
    var endIcon = <Icon style={{display:'inline-flex !important'}} name={iconName} width={iconWidth} height={iconHeight} color={iconColor}/>
  } else {
    startIcon=''
    endIcon=''
  }
  const classes = useStyles()
  return (  
    <div style={{textAlign:`${textAlign}`, margin: `${containerMargin}`}}>
        <CustomizedButton
          className= {classes.button}
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
  hoverTextColor: PropTypes.string
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
  hoverTextColor: "white"
};

export default ButtonItem