import React, { useState } from "react";
import TextInput from "../../atoms/TextInput/TextInput";
import Button from "../../atoms/Button/Button";
import Modal from "@mui/material/Modal";
import style from "./AddFriendModal.style";
import "../../style.css";
import PropTypes from "prop-types";
import ModalHeader from "../Modals/ModalHeader/ModalHeader";
import { useAppDispatch } from "../../../../store";
import { addFriend, getFriends } from "../../../../store/features/auth/authSlice";
import socket from "../../../../utils/socket";

const AddFriendModal = ({ isOpen, modalClose }) => {
  const styles = style();
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    console.log(e.key);
    setUsername(e.target.value.trim());
  };

  const onClickAdd = async (e) => {
    e.preventDefault();
    const res = await dispatch(addFriend({ username }));
    if (!res.error) {
      await dispatch(getFriends({ user: username }));
      socket.emit("friend_request", { username });
    }
    setUsername("");
    modalClose();
  };

  const handleKeyPress = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      e.preventDefault();
      onClickAdd(e);
    }
  };

  return (
    <>
      <Modal open={isOpen} sx={styles.rootContainer} onClose={modalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="modal" style={styles.container}>
          <ModalHeader modalClose={modalClose} iconName="Friend" iconColor="dark" text="Add Friend" />
          <div style={styles.body}>
            <TextInput
              value={username}
              onKeyDown={handleKeyPress}
              onChange={handleChange}
              className="input"
              font="InterRegular"
              placeHolder="Enter your friend username"
              fontSize="1.8rem"
              type="text"
            />
            <Button className="buttonHoverGold" onClick={onClickAdd} fontSize="1.6rem" margin="2rem 0 0 0" padding="1rem" text="Add" width="100%" buttonColor="#EBD894" />
          </div>
        </div>
      </Modal>
    </>
  );
};

AddFriendModal.propTypes = {
  isOpen: PropTypes.bool,
};
AddFriendModal.defaultProps = {
  isOpen: false,
};

export default AddFriendModal;
