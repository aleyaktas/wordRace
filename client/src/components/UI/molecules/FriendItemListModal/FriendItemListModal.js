import React from 'react'
import  '../../molecules/style.css'
import PropTypes from 'prop-types';
import './style.css'
import ModalHeader from '../Modals/ModalHeader/ModalHeader';
import FriendItemList from '../../organisms/FriendItemList/FriendItemList';
import { Modal } from '@mui/material';

const FriendListModal = ({isOpen, friends, modalClose, inviteModal, customComponent}) => {
  
  const style = {
    width: 600,
    height:"50vh",
    boxShadow: 24,
    p: 4,
    backgroundColor:"white",
    outline:"none"
  };

  return (
    <Modal
      open={isOpen}
      onClose={modalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div id="friendList" class="containerDiv" style={style}>  
        <ModalHeader display="flex" modalClose={modalClose} text="Your Friends" height="10vh"/>
        <FriendItemList height="40vh" friends={friends} inviteModal={inviteModal} customComponent={customComponent} />
      </div>
    </Modal>
  )
}

FriendListModal.propTypes = {
  isOpen: PropTypes.bool,
};
FriendListModal.defaultProps = {
  isOpen: false,
  inviteModal: false
};

export default FriendListModal
