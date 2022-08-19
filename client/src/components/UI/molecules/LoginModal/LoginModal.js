import React, { useState } from "react";
import Text from "../../atoms/Text/Text";
import TextInput from "../../atoms/TextInput/TextInput";
import Button from "../../atoms/Button/Button";
import Modal from "@mui/material/Modal";
import "../../style.css";
import PropTypes from "prop-types";
import style from "./LoginModal.style";
import ModalHeader from "../Modals/ModalHeader/ModalHeader";
import { getUser, loginUser } from "../../../../store/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../store";

const LoginModal = ({ isOpen, setIsOpen, modalClose }) => {
  const styles = style();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    await dispatch(loginUser({ username, password }));
    await dispatch(getUser());
    setFormData({ username: "", password: "" });
    navigate("/profile");
    modalClose();
  };

  return (
    <>
      <Modal open={isOpen} onClose={modalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="modal" style={styles.container}>
          <ModalHeader modalClose={modalClose} icon iconName="LoginUser" text="Login" />
          <div style={styles.body}>
            <TextInput onChange={handleChange} font="InterRegular" placeHolder="Username" icon iconName="User" fontSize="1.6rem" margin="0 0 1.5rem 0" type="text" />
            <TextInput
              onChange={handleChange}
              className="input"
              font="InterRegular"
              placeHolder="Password"
              icon
              iconName="Lock"
              fontSize="1.6rem"
              margin="0 0 1.5rem 0"
              type="password"
            />
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
            <Button className="buttonHoverGold" onClick={handleSubmit} text="Login" iconName="User" width="100%" margin="2rem 0" padding="1rem" buttonColor="#EBD894" />
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
