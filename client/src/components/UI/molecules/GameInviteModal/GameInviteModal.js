import React, { useEffect, useState } from "react";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import Modal from "@mui/material/Modal";
import Icon from "../../../../assets/icons/Icon";
import "../../style.css";
import PropTypes from "prop-types";
import style from "./GameInviteModal.style";
import socket from "../../../../utils/socket";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showMessage } from "../../../../utils/showMessage";

const GameInviteModal = ({ room, isOpen, modalClose }) => {
  const styles = style();
  const username = useAppSelector((state) => state?.auth?.user?.username);
  const profileImage = useAppSelector((state) => state?.auth?.user?.profileImage);

  const { rooms } = useAppSelector((state) => state?.auth);
  const navigate = useNavigate();
  const { id, name, image, timer, players, questions } = room;
  const roomId = id;
  const onClick = () => {
    const joinRoom = rooms.find((room) => room.id === roomId);
    if (joinRoom && joinRoom.players.length < 2) {
      socket.emit("join_room", { user: { username, image: profileImage }, roomId });
      navigate(`/rooms/${id}`);
      showMessage("You have joined the room", "success");
      modalClose();
    } else {
      showMessage("This room is full", "warning");
      modalClose();
    }
  };

  return (
    <>
      <Modal open={isOpen} sx={styles.rootContainer} onClose={modalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="modal" style={styles.container}>
          <div style={styles.cardImage}>
            <button style={styles.closeButton} onClick={modalClose}>
              <Icon name="Close" width="1.8rem" height="1.8rem" color="#8F8F8F" />
            </button>
            <div style={styles.card} className="card">
              <img src={image && require(`../../../../assets/images/${image}.png`)} alt={image} width="100%" height="100%" />
            </div>
          </div>
          <div style={styles.cardText}>
            <Text font="RobotoMedium" text={players && `${players[0]?.username} invites you to the game`} color="#6A685E" />
          </div>
          <Button
            onClick={onClick}
            text="JOIN THE GAME"
            margin="0 auto 3rem auto"
            padding="1rem 4.8rem"
            buttonColor="#C0FFB0"
            textColor="#2B9810"
            borderRadius="1.8rem"
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
  // roomName: "Room Name",
  // roomImage: "Bear",
  // roomFounder: "Username",
};

export default GameInviteModal;
