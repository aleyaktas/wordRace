import React from "react";
import Text from "../../atoms/Text/Text";
import TextInput from "../../atoms/TextInput/TextInput";
import Button from "../../atoms/Button/Button";
import Modal from "@mui/material/Modal";
import "../../style.css";
import PropTypes from "prop-types";
import style from "./LoginModal.style";
import ModalHeader from "../Modals/ModalHeader/ModalHeader";

const LoginModal = ({ isOpen, setIsOpen, modalClose, onClick }) => {
  const styles = style();

  return (
    <>
      <Modal open={isOpen} onClose={modalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="modal" style={styles.container}>
          <ModalHeader modalClose={modalClose} icon iconName="LoginUser" text="Login" />
          <div style={styles.body}>
            <TextInput font="InterRegular" placeHolder="Email" icon iconName="Mail" fontSize="1.6rem" margin="0 0 1.5rem 0" type="text" />
            <TextInput className="input" font="InterRegular" placeHolder="Password" icon iconName="Lock" fontSize="1.6rem" margin="0 0 1.5rem 0" type="password" />
            <button className="buttonHoverBlack" style={styles.button} onClick={() => setIsOpen({ ...isOpen, isOpenState: true, componentName: "ForgotPasswordModal" })}>
              <Text
                color="#6B5814"
                margin="2rem 0 0 0"
                textAlign="end"
                text="Forgot your password?"
                font="RobotoThin"
                letterSpacing="0.1rem"
                fontSize="1.4rem"
                textDecorationLine="underline"
              />
            </button>
            <Button className="buttonHoverGold" onClick={onClick} text="Login" iconName="User" width="100%" margin="2rem 0" padding="1rem" buttonColor="#EBD894" />
          </div>
          <button className="buttonHoverBlack" style={styles.button} onClick={() => setIsOpen({ ...isOpen, isOpenState: true, componentName: "RegisterModal" })}>
            <Text margin="0 0 2rem 0" textAlign="center" text="Don't have an account?" fontSize="1.6rem" font="RobotoThin" color="#6B5814" letterSpacing="0.15rem" />
          </button>
        </div>
      </Modal>
    </>
  );
};

LoginModal.propTypes = {
  isOpen: PropTypes.bool,
};
LoginModal.defaultProps = {
  isOpen: false,
};

export default LoginModal;
