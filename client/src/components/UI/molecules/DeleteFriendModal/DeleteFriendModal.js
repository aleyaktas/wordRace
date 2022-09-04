import React from "react";
import Modal from "@mui/material/Modal";
import "../../style.css";
import PropTypes from "prop-types";
import style from "./DeleteFriendModal.style";
import Button from "../../atoms/Button/Button";
import ModalHeader from "../Modals/ModalHeader/ModalHeader";
import { deleteFriend, getFriends } from "../../../../store/features/auth/authSlice";
import { useAppDispatch } from "../../../../store";
import socket from "../../../../utils/socket";

const DeleteFriendModal = ({ isOpen, modalClose, username }) => {
  const styles = style();
  const dispatch = useAppDispatch();

  const onClick = async (e) => {
    e.preventDefault();
    const res = await dispatch(deleteFriend({ username }));
    if (!res.error) {
      await dispatch(getFriends({ user: username }));
      socket.emit("friend_delete", { username });
    }
    modalClose();
  };

  return (
    <>
      <Modal open={isOpen} sx={styles.rootContainer} onClose={modalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="modal" style={styles.container}>
          <ModalHeader iconName="Trash" modalClose={modalClose} text="Are you sure?" description="Do you want to delete your friend? You can then send a friend request again" />
          <div style={styles.body}>
            <Button className="buttonHoverGold" onClick={modalClose} fontSize="1.6rem" padding="0.8rem" text="No" width="40%" buttonColor="#EBD894" />
            <Button className="buttonHoverGold" onClick={onClick} fontSize="1.6rem" padding="0.8rem" text="Yes" width="40%" buttonColor="#EBD894" />
          </div>
        </div>
      </Modal>
    </>
  );
};

DeleteFriendModal.propTypes = {
  isOpen: PropTypes.bool,
};
DeleteFriendModal.defaultProps = {
  isOpen: false,
};

export default DeleteFriendModal;
