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

const AddFriendModal = ({ isOpen, modalClose }) => {
  const styles = style();
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value.trim());
  };
  const onClick = (e) => {
    e.preventDefault();
    dispatch(addFriend({ username }));
    dispatch(getFriends({ username }));
    setUsername("");
    modalClose();
  };

  return (
    <>
      <Modal open={isOpen} onClose={modalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="modal" style={styles.container}>
          <ModalHeader modalClose={modalClose} icon iconName="Friend" text="Add Friend" />
          <div style={styles.body}>
            <TextInput onChange={handleChange} className="input" icon font="InterRegular" placeHolder="Enter your friend username" fontSize="1.8rem" type="text" />
            <Button className="buttonHoverGold" onClick={onClick} fontSize="1.6rem" margin="4rem 0" padding="1rem" text="Add" width="100%" buttonColor="#EBD894" />
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
