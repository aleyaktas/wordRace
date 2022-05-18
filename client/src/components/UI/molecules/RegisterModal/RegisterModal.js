import React from 'react'
import Text from '../../atoms/Text/Text'
import TextInput from '../../atoms/TextInput/TextInput'
import ButtonItem from '../../atoms/Button/Button'
import Modal from '@mui/material/Modal';
import Icon from '../../../../assets/icons/Icon';
import  '../../molecules/style.css'
import PropTypes from 'prop-types';

const RegisterModal = ({isOpen, modalClose, onClick}) => {
  
  const style = {
    width: 400,
    boxShadow: 24,
    p: 4,
    backgroundColor:"white"
  };

  return (
    <>  
      <Modal
        open={isOpen}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div class="containerDiv" style={style} >
          <button id="button" class='button' onClick={modalClose}>
            <Icon name="Close" width={18} height={18} color="#8F8F8F"/>
          </button>
          <Text textAlign="center" text="Sign Up" font="InterRegular" letterSpacing="4px" fontSize="24px" />
          <TextInput font="InterRegular" containerMargin="7%" placeHolder='Username' icon="true" iconName="User" fontSize={16} placeHolderSize="14px" type="text" />
          <TextInput font="InterRegular" containerMargin="7%" placeHolder='Email' icon="true" iconName="Mail" fontSize={16} placeHolderSize="14px" type="text" />
          <TextInput font="InterRegular" containerMargin="7%" placeHolder='Password' icon="true" iconName="Lock" fontSize={16} placeHolderSize="14px" type="password"  />
          <ButtonItem onClick={onClick} id="buttonItem" text='Sign Up' size="md" textAlign="center" iconName="User"  width="100%" containerMargin="7%" buttonColor='#EBD894' />
          <button style={{display:"contents", cursor:"pointer"}} >
            <Text margin="7%" textAlign="center" text="Do you have an account?" textDecorationLine='underline' font="RobotoThin" color='#6B5814' letterSpacing="1.5px"/>
          </button>
        </div>
        </Modal>
      </>
  )
}

RegisterModal.propTypes = {
  isOpen: PropTypes.bool,
};
RegisterModal.defaultProps = {
  isOpen:false
};

export default RegisterModal

