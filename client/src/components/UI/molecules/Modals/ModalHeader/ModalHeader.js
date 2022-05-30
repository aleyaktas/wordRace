import React from 'react'
import Text from '../../../atoms/Text/Text'
import Icon from '../../../../../assets/icons/Icon';
import PropTypes from 'prop-types';

const ModalHeader = ({modalClose, text, iconColor, height}) => {
  const style = {
    height,
  }

  return (
      <div style={style}>
        <button id="button" onClick={modalClose}>
          <Icon name="Close" width={18} height={18} color={iconColor}/>
        </button>
        <div id="text">
          <Text margin="0px" textAlign="center" text={text} font="InterRegular" letterSpacing="2px" fontSize="20px" />
        </div>
      </div>
  )
}

ModalHeader.propTypes = {
  text: PropTypes.string,
};
ModalHeader.defaultProps = {
  text: null
};

export default ModalHeader