import Text from "../../atoms/Text/Text";
import TextInput from "../../atoms/TextInput/TextInput";
import Button from "../../atoms/Button/Button";
import Modal from "@mui/material/Modal";
import "../../style.css";
import PropTypes from "prop-types";
import style from "./RegisterModal.style";
import ModalHeader from "../Modals/ModalHeader/ModalHeader";
import { useState } from "react";
import { useAppDispatch } from "../../../../store";
import { getUser, registerUser } from "../../../../store/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const RegisterModal = ({ isOpen, setIsOpen, modalClose }) => {
  const styles = style();
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    //control username, email, password
    e.preventDefault();
    const { username, email, password } = formData;
    await dispatch(registerUser({ username, email, password }));
    await dispatch(getUser());
    if (localStorage.getItem("token")) {
      modalClose();
      navigate("/room");
    }
  };

  const handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <>
      <Modal open={isOpen} sx={styles.rootContainer} onClose={modalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="modal" style={styles.container}>
          <ModalHeader modalClose={modalClose} iconName="RegisterUser" text="Sign Up" />
          <div style={styles.body}>
            <TextInput onChange={handleChange} font="InterRegular" placeHolder="Username" iconName="User" fontSize="1.6rem" margin="0 0 1.5rem 0" type="text" />
            <TextInput onChange={handleChange} font="InterRegular" placeHolder="Email" iconName="Mail" fontSize="1.6rem" margin="0 0 1.5rem 0" type="text" />
            <TextInput
              onChange={handleChange}
              onKeyDown={handleKeyPress}
              font="InterRegular"
              placeHolder="Password"
              iconName="Lock"
              fontSize="1.6rem"
              margin="0 0 1.5rem 0"
              type="password"
            />
            <Button className="buttonHoverGold" onClick={handleSubmit} text="Sign Up" width="100%" margin="2rem 0" padding="1rem" buttonColor="#EBD894" />
            <button className="buttonHoverBlack" style={styles.button} onClick={() => setIsOpen({ ...isOpen, isOpenState: true, componentName: "LoginModal" })}>
              <Text textAlign="center" text="Do you have an account?" font="RobotoThin" color="#6B5814" letterSpacing="0.15rem" />
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

RegisterModal.propTypes = {
  isOpen: PropTypes.bool,
};
RegisterModal.defaultProps = {
  isOpen: false,
};

export default RegisterModal;
