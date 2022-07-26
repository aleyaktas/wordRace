import React from "react";
import TextInput from "../../atoms/TextInput/TextInput";
import Modal from "@mui/material/Modal";
import "../../style.css";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button";
import style from "./ChangePasswordModal.style";
import ModalHeader from "../Modals/ModalHeader/ModalHeader";

const ChangePasswordModal = ({ isOpen, modalClose, onClick }) => {
  const styles = style();

  return (
    <>
      <Modal open={isOpen} onClose={modalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="modal" style={styles.container}>
          <ModalHeader modalClose={modalClose} icon iconName="Password" text="Change Password" />
          <div style={styles.body}>
            <TextInput className="input" font="InterRegular" placeHolder="Current Password" fontSize="1.8rem" margin="0 0 2rem 0" type="password" />
            <TextInput className="input" font="InterRegular" placeHolder="New Password" fontSize="1.8rem" margin="0 0 2rem 0" type="password" />
            <TextInput className="input" font="InterRegular" placeHolder="Confirm New Password" fontSize="1.8rem" type="password" />
            <Button
              className="buttonHoverGold"
              onClick={onClick}
              fontSize="1.6rem"
              text="Save"
              iconName="User"
              width="100%"
              padding="1rem"
              margin="2.5rem 0"
              buttonColor="#EBD894"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

ChangePasswordModal.propTypes = {
  isOpen: PropTypes.bool,
};
ChangePasswordModal.defaultProps = {
  isOpen: false,
};

export default ChangePasswordModal;
