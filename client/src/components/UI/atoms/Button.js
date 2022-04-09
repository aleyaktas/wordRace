import React from 'react'
import { Button } from '@mui/material';

const ButtonIcon = ({ buttonColor, textColor, buttonSize, variant, text, iconName, iconColor }) => {
  const Icon = require('../../../assets/icons/Icons')[iconName]
  return (
    <div>
        <Button variant={ variant || "outlined"} 
        style={{ 
          backgroundColor: buttonColor, 
          color: textColor, 
          fontSize: buttonSize 
        }} 
          >
          {iconName && <Icon color={iconColor}/>} 
        {text}
        </Button>
    </div>
  )
}

export default ButtonIcon