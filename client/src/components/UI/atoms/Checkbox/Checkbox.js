import React from 'react'
import './style.css'
import PropTypes from 'prop-types';

const Checkbox = ({ onChange, value, checboxColor, font, width, height, fontSize, color, margin }) => {
  return (
    <div style={{display:"inline", margin}} >
      <input style={{'--checkboxColor': checboxColor, width, height}}  onChange={onChange} class="input" type="radio" id="checkbox" name="input" value={value}/>
      <label style={{fontSize, color}} class={font} for="checkbox">{value}</label>
    </div>
  )
}

Checkbox.propTypes = {
  value: PropTypes.string,
  checboxColor: PropTypes.string,
  color: PropTypes.string
};


export default Checkbox