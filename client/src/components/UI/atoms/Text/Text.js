import React from 'react'
import { Typography } from '@mui/material';
import '../../../../App.css'
import PropTypes from 'prop-types';

const Text = ({ text, font, fontSize, color, textDecorationLine, textAlign, letterSpacing, padding, margin, paddingContainer, marginContainer}) => {

  const style = {
    fontSize,
    color,
    textDecorationLine,
    textAlign,
    letterSpacing,
    margin,
    padding
  }
  const styleContainer = {
    padding: paddingContainer,
    margin: marginContainer
  }
  return (
    <div style={styleContainer}>
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