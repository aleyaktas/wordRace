import React, { useState } from "react";
import TextInput from "../../atoms/TextInput/TextInput";
import Modal from "@mui/material/Modal";
import "../../style.css";
import PropTypes from "prop-types";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Button from "../../atoms/Button/Button";
import style from "./CreateRoomModal.style";
import ModalHeader from "../Modals/ModalHeader/ModalHeader";
import { useNavigate } from "react-router-dom";
import socket from "../../../../utils/socket";
import { useAppSelector } from "../../../../store";
const { v4: uuidv4 } = require("uuid");

const CreateRoomModal = ({ isOpen, modalClose }) => {
  const styles = style();
  const [roomName, setRoomName] = useState("");
  const { username, profileImage } = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setRoomName(e.target.value.trim());
  };

  const onClick = (e) => {
    e.preventDefault();
    const roomId = uuidv4();
    socket.emit("create_room", {
      user: {
        username,
        image: profileImage,
      },
      roomName,
      roomId,
    });
    navigate(`/rooms/${roomId}`);
    modalClose();
  };

  return (
    <>
      <Modal open={isOpen} sx={styles.rootContainer} onClose={modalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="modal" style={styles.container}>
          <ModalHeader modalClose={modalClose} iconName="CreatePlus" text="Create Room" />
          <div style={styles.body}>
            <TextInput value={roomName} onChange={handleChange} className="input" font="InterRegular" placeHolder="Room Name" fontSize="1.8rem" type="text" />
            <div style={styles.checkbox}>
              <Checkbox className="input" fontSize="1.5rem" margin="2rem 0.8rem 0 0" checboxColor="#709F60" color="#6B5814" text="Public" isCheck />
              <Checkbox className="input" fontSize="1.5rem" margin="2rem 0 0 0" checboxColor="#709F60" color="#6B5814" text="Private" />
            </div>
            <Button className="buttonHoverGold" onClick={onClick} fontSize="1.6rem" margin="2rem 0 0 0" padding="1rem" text="Create" width="100%" buttonColor="#EBD894" />
          </div>
        </div>
      </Modal>
    </>
  );
};

CreateRoomModal.propTypes = {
  isOpen: PropTypes.bool,
};
CreateRoomModal.defaultProps = {
  isOpen: false,
};

export default CreateRoomModal;
