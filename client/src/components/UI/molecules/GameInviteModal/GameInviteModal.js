import React from "react";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import Modal from "@mui/material/Modal";
import Icon from "../../../../assets/icons/Icon";
import "../../style.css";
import PropTypes from "prop-types";
import style from "./GameInviteModal.style";

const GameInviteModal = ({ isOpen, modalClose, onClick, roomImage, roomFounder }) => {
  const styles = style();
  return (
    <>
      <Modal open={isOpen} onClose={modalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="modal" style={styles.container}>
          <div style={styles.cardImage}>
            <button style={styles.closeButton} onClick={modalClose} id="close-button">
              <Icon name="Close" width="1.8rem" height="1.8rem" color="#8F8F8F" />
            </button>
            <div style={styles.card} className="card">
              <img src={require(`../../../../assets/images/${roomImage}.png`)} alt={roomImage} width="100%" height="100%" />
            </div>
          </div>
          <div style={styles.cardText}>
            <Text font="RobotoMedium" text={`${roomFounder} invites you to the game`} color="#6A685E" />
          </div>
          <Button
            onClick={onClick}
            text="JOIN THE GAME"
            fontSize="1.4rem"
            padding="0.8rem 1rem"
            margin="auto"
            width="75%"
            buttonColor="#C0FFB0"
            textColor="#2B9810"
            borderRadius="2rem"
            className="buttonHoverGreen"
          />
        </div>
      </Modal>
    </>
  );
};

GameInviteModal.propTypes = {
  isOpen: PropTypes.bool,
};
GameInviteModal.defaultProps = {
  isOpen: false,
  roomName: "Room Name",
  roomImage: "Bear",
  roomFounder: "Username",
};

export default GameInviteModal;
