import React from 'react'
import { Typography } from '@mui/material';
import '../../../../App.css'
import PropTypes from 'prop-types';

const Text = ({ text, font, size, color, textDecorationLine }) => {

  const style = {
    fontSize: size,
    color,
    textDecorationLine
  }
  return (
    <div>
      <Typography
        style={style}
        class={font}
      >{text}
      </Typography>
    </div>
  )
}

Text.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  textDecorationLine: PropTypes.string
};
Text.defaultProps = {
  color: "black",
  font:"InterRegular"
};

export default Text