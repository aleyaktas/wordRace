import React from 'react'
import Text from '../../atoms/Text/Text'
import ButtonItem from '../../atoms/Button/Button'
import Modal from '@mui/material/Modal';
import Icon from '../../../../assets/icons/Icon';
import  '../../molecules/style.css'
import './style.css';
import PropTypes from 'prop-types';

const GameInviteModal = ({isOpen, modalClose, onClick, roomImage, roomFounder}) => {
  
  const containerDivStyle = {
    width: 300,
    height: 300,
    boxShadow: 24,
    p: 4,
    backgroundColor:"white",
    borderRadius: 34,
    overflow:"hidden",
    outline: "none"
  };
  const cardImageDivStyle = {
    height: 150,
    backgroundColor: "#89DF73"
  }
  const cardTextStyle = {
    height:85,
    justifyContent:"center",
    alignItems:"center", 
    display:"flex"
  }
  return (
    <>  
      <Modal
        open={isOpen}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <div class="containerDiv" style={containerDivStyle} >
            <div style={cardImageDivStyle}>
            <button id="closeButton" onClick={modalClose}> 
              <Icon name="Close" width={18} height={18} color="#8F8F8F"/>
            </button>
            <div id="card" >
              <img src={require(`../../../../assets/images/${roomImage}.png`)} alt={roomImage} width="100" height="100"/>
            </div>
            </div>
            <div style={cardTextStyle}>
              <Text font="InterSemiBold" text={`${roomFounder} invites you to the game`} color="#6A685E" margin={0}/>
            </div>
            <ButtonItem onClick={onClick} text='JOIN THE GAME' fontSize="14px" padding= "8px 10px" textAlign="center" width="75%" buttonColor='#C0FFB0' textColor="#2B9810" borderRadius="20px" hoverTextColor='white' hoverBackgroundColor="#39D712 !important" />
          </div>
        </Modal>
      </>
  )
}

GameInviteModal.propTypes = {
  isOpen: PropTypes.bool,
 
};
GameInviteModal.defaultProps = {
  isOpen:false,
  roomName:"Room Name",
  roomImage: "Bear",
  roomFounder:"Username"
};

export default GameInviteModal
