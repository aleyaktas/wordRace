import React from 'react'
import Text from '../../atoms/Text/Text'
import TextInput from '../../atoms/TextInput/TextInput'
import ButtonItem from '../../atoms/Button/Button'
import Modal from '@mui/material/Modal';
import Icon from '../../../../assets/icons/Icon';
import  '../../molecules/style.css'
import PropTypes from 'prop-types';

const LoginModal = ({isOpen, modalClose, onClick}) => {
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
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
          <Text textAlign="center" text="Login" font="InterRegular" letterSpacing="4px" fontSize="24px" />
          <TextInput font="InterRegular" containerMargin="7%" placeHolder='Username' icon="true" iconName="User" fontSize={16} placeHolderSize="14px" type="text" />
          <TextInput font="InterRegular" containerMargin="7% 7% 3% 7%" placeHolder='Password' icon="true" iconName="Lock" fontSize={16} placeHolderSize="14px" type="password" />
          <Text color="#6B5814" margin="0% 7%" textAlign="end" text="Forgot your password?" font="RobotoThinItalic" letterSpacing="1px" fontSize={14} textDecorationLine="underline"/>
          <ButtonItem onClick={onClick} id="buttonItem" text='Login' size="md" textAlign="center" iconName="User"  width="100%" containerMargin="7%" buttonColor='#EBD894' />
          <button style={{display:"contents", cursor:"pointer"}} >
            <Text margin="7%" textAlign="center" text="Don't have an account?" fontSize={16} textDecorationLine='underline' font="RobotoThin" color='#6B5814' letterSpacing="1.5px"/>
          </button>
        </div>
        </Modal>
      </>
  )
}

LoginModal.propTypes = {
  isOpen: PropTypes.bool,
 
};
LoginModal.defaultProps = {
  isOpen:false
};

export default LoginModal

