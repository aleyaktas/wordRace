import React from 'react'
import { Typography } from '@mui/material';


const Text = ({ text, font, size, color, variant }) => {
  return (
    <div>
      <Typography 
        style={{fontSize:size, color:color}} 
        className={font} 
        variant={variant} 
      >{text}
      </Typography>
    </div>
  )
}

export default Text