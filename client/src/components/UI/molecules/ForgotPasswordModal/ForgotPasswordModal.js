import React from "react";
import TextInput from "../../atoms/TextInput/TextInput";
import Button from "../../atoms/Button/Button";
import Modal from "@mui/material/Modal";
import "../../style.css";
import PropTypes from "prop-types";
import style from "./ForgotPasswordModal.style";
import ModalHeader from "../Modals/ModalHeader/ModalHeader";

const ForgotPasswordModal = ({ isOpen, modalClose, onClick }) => {
  const styles = style();

  return (
    <>
      <Modal open={isOpen} onClose={modalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="modal" style={styles.container}>
          <ModalHeader modalClose={modalClose} icon iconName="ForgotPassword" text="Forgot Password" />
          <div style={styles.body}>
            <TextInput font="InterRegular" placeHolder="Email" icon="true" iconName="Mail" fontSize="1.6rem" margin="0 0 2rem 0" type="text" />
            <Button className="buttonHoverGold" onClick={onClick} text="Reset Password" iconName="User" width="100%" margin="3rem 0" padding="1rem" buttonColor="#EBD894" />
          </div>
        </div>
      </Modal>
    </>
  );
};

ForgotPasswordModal.propTypes = {
  isOpen: PropTypes.bool,
};
ForgotPasswordModal.defaultProps = {
  isOpen: false,
};

export default ForgotPasswordModal;
