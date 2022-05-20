import React from 'react'
import Text from '../../atoms/Text/Text'
import TextInput from '../../atoms/TextInput/TextInput'
import ButtonItem from '../../atoms/Button/Button'
import Modal from '@mui/material/Modal';
import Icon from '../../../../assets/icons/Icon';
import  '../../molecules/style.css'
import PropTypes from 'prop-types';

const AddFriendModal = ({isOpen, modalClose, onClick}) => {
  
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
          <Text textAlign="center" text="Add friend" font="InterRegular" letterSpacing="2px" fontSize="20px" margin="0px 0px 40px 0px" />
          <TextInput font="InterRegular" containerMargin="7%" placeHolder='Enter your friend username' fontSize={18} placeHolderSize="16px" type="text" />
          <ButtonItem onClick={onClick} id="buttonItem" text='Add' size="md" textAlign="center" iconName="User"  width="100%" containerMargin="8% 7%" buttonColor='#EBD894' />
        </div>
        </Modal>
      </>
  )
}

AddFriendModal.propTypes = {
  isOpen: PropTypes.bool,
 
};
AddFriendModal.defaultProps = {
  isOpen:false
};

export default AddFriendModal
