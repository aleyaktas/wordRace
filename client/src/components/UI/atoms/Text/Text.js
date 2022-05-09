import React from 'react'
import { Typography } from '@mui/material';
import '../../../../App.css'
import PropTypes from 'prop-types';

const Text = ({ text, font, size, color }) => {

  const style = {
    fontSize: size,
    color
  }
  return (
    <div>
      <Typography
        style={style}
        className={font}
      >{text}
      </Typography>
    </div>
  )
}

Text.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};
Text.defaultProps = {
  color: "black",
  font:"InterSemiBold"
};

export default Text