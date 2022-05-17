import React from 'react'
import Text from '../../atoms/Text/Text'
import TextInput from '../../atoms/TextInput/TextInput'
import ButtonItem from '../../atoms/Button/Button'
import Modal from '@mui/material/Modal';
import Icon from '../../../../assets/icons/Icon';
import  '../../molecules/style.css'
import PropTypes from 'prop-types';
import Checkbox from '../../atoms/Checkbox/Checkbox';

const CreateRoomModal = ({isOpen, modalClose, onClick}) => {
  
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
          <Text textAlign="center" text="Create Room" font="InterRegular" letterSpacing="4px" fontSize="24px" margin="0px 0px 40px 0px" />
          <TextInput font="InterRegular" containerMargin="7%" placeHolder='Room Name' fontSize={18} placeHolderSize="16px" type="text" />
          <div style={{margin: "7%"}} >
            <Checkbox checboxColor="#709F60" font="RobotoBold" color="#6B5814" value="Public" margin="0px 5px 0px 0px" />
            <Checkbox checboxColor="#709F60" font="RobotoBold" color="#6B5814" value="Private"/>
          </div>
          <ButtonItem onClick={onClick} id="buttonItem" text='Create' size="md" textAlign="center" iconName="User"  width="100%" containerMargin="7%" buttonColor='#EBD894' />
        </div>
        </Modal>
      </>
  )
}

CreateRoomModal.propTypes = {
  isOpen: PropTypes.bool,
 
};
CreateRoomModal.defaultProps = {
  isOpen:false
};

export default CreateRoomModal
