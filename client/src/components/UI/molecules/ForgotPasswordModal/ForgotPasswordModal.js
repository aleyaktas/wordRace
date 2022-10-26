import React, { useState } from "react";
import TextInput from "../../atoms/TextInput/TextInput";
import Button from "../../atoms/Button/Button";
import Modal from "@mui/material/Modal";
import "../../style.css";
import PropTypes from "prop-types";
import style from "./ForgotPasswordModal.style";
import ModalHeader from "../Modals/ModalHeader/ModalHeader";

const ForgotPasswordModal = ({ isOpen, modalClose, onClick }) => {
  const styles = style();
  const [email, setEmail] = useState();

  return (
    <>
      <Modal open={isOpen} sx={styles.rootContainer} onClose={modalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="modal" style={styles.container}>
          <ModalHeader modalClose={modalClose} iconName="ForgotPassword" text="Forgot Password" />
          <div style={styles.body}>
            <TextInput onChange={(e) => setEmail(e.target.value)} font="InterRegular" placeHolder="Email" iconName="Mail" fontSize="1.6rem" margin="0 0 2rem 0" type="text" />
            <Button className="buttonHoverGold" onClick={() => onClick(email)} text="Reset Password" width="100%" margin="2rem 0 0 0" padding="1rem" buttonColor="#EBD894" />
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
