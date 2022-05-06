import React from 'react'
import { Typography } from '@mui/material';


const Text = ({ text, font, size, color }) => {
  return (
    <div>
      <Typography
        style={{ fontSize: size, color: color }}
        className={font}
      >{text}
      </Typography>
    </div>
  )
}

export default Text