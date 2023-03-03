import React from "react";
import "../../style.css";
import PropTypes from "prop-types";
import ModalHeader from "../Modals/ModalHeader/ModalHeader";
import FriendItemList from "../../organisms/FriendItemList/FriendItemList";
import { Modal } from "@mui/material";
import style from "./FriendItemListModal.style";

const FriendListModal = ({ isOpen, friends, offlineFriends, modalClose, modalType, title }) => {
  const styles = style();

  return (
    <Modal open={isOpen} sx={styles.rootContainer} onClose={modalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <div id="friendList" className="modal" style={styles.modal}>
        <ModalHeader modalClose={modalClose} text={title || "Your Friends"} height="10rem" textMargin="0px" />
        <FriendItemList height="40rem" friends={friends} offlineFriends={offlineFriends} modalType={modalType} modalClose={modalClose} />
      </div>
    </Modal>
  );
};

FriendListModal.propTypes = {
  isOpen: PropTypes.bool,
};
FriendListModal.defaultProps = {
  isOpen: false,
  modalType: null,
};

export default FriendListModal;
