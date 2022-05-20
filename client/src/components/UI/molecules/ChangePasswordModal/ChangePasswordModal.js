import React from 'react'
import Text from '../../atoms/Text/Text'
import TextInput from '../../atoms/TextInput/TextInput'
import ButtonItem from '../../atoms/Button/Button'
import Modal from '@mui/material/Modal';
import Icon from '../../../../assets/icons/Icon';
import  '../../molecules/style.css'
import PropTypes from 'prop-types';

const ChangePasswordModal = ({isOpen, modalClose, onClick}) => {
  
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
          <Text textAlign="center" text="Change Password" font="InterRegular" letterSpacing="2px" fontSize="20px" margin="0px 0px 40px 0px" />
          <TextInput font="InterRegular" containerMargin="5% 10%" placeHolder='Current Password' fontSize={18} placeHolderSize="16px" padding="10px" type="password" />
          <TextInput font="InterRegular" containerMargin="5% 10%" placeHolder='New Password' fontSize={18} placeHolderSize="16px"  padding="10px" type="password" />
          <TextInput font="InterRegular" containerMargin="5% 10%" placeHolder='Confirm New Password' fontSize={18} placeHolderSize="16px" padding="10px" type="password" />
          <ButtonItem onClick={onClick} id="buttonItem" text='Save' size="md" textAlign="center" iconName="User"  width="100%" containerMargin="10% 10%" buttonColor='#EBD894' />
        </div>
        </Modal>
      </>
  )
}

ChangePasswordModal.propTypes = {
  isOpen: PropTypes.bool,
 
};
ChangePasswordModal.defaultProps = {
  isOpen:false
};

export default ChangePasswordModal
