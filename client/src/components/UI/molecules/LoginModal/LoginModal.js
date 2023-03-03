import React from "react";
import Text from "../../atoms/Text/Text";
import TextInput from "../../atoms/TextInput/TextInput";
import Button from "../../atoms/Button/Button";
import Modal from "@mui/material/Modal";
import "../../style.css";
import PropTypes from "prop-types";
import style from "./LoginModal.style";
import ModalHeader from "../Modals/ModalHeader/ModalHeader";
import * as Yup from "yup";
import { Formik } from "formik";

const LoginSchema = Yup.object().shape({
  username: Yup.string().min(4, "Minumum 4 Character required ").max(30, "Too Long!").required("Please enter your username"),
  password: Yup.string().min(6, "Minumum 6 Character required").max(30, "Too Long!").required("Please enter your password"),
});

const LoginModal = ({ isOpen, setIsOpen, modalClose, handleSubmit }) => {
  const styles = style();

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
          <ModalHeader modalClose={modalClose} iconName="LoginUser" text="Login" />
          <div style={styles.body}>
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <TextInput
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    font="InterRegular"
                    placeHolder="Username"
                    iconName="User"
                    fontSize="1.6rem"
                    margin="0 0 1.5rem 0"
                    type="text"
                  />
                  {errors.username && touched.username && <Text text={errors.username} fontSize="1rem" color="#ff4e4e" margin="0 0 1rem 0" />}

                  <TextInput
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    onKeyDown={handleKeyPress}
                    className="input"
                    font="InterRegular"
                    placeHolder="Password"
                    iconName="Lock"
                    fontSize="1.6rem"
                    margin="0 0 1.5rem 0"
                    type="password"
                  />
                  {errors.password && touched.password && <Text text={errors.password} fontSize="1rem" color="#ff4e4e" />}

                  <Button className="buttonHoverGold" type="submit" text="Login" width="100%" margin="2rem 0" padding="1rem" buttonColor="#EBD894" />
                </form>
              )}
            </Formik>
          </div>
          <button className="buttonHoverBlack" style={styles.button} onClick={() => setIsOpen({ ...isOpen, isOpenState: true, componentName: "RegisterModal" })}>
            <Text textAlign="center" text="Don't have an account?" fontSize="1.6rem" font="RobotoThin" color="#6B5814" letterSpacing="0.15rem" />
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
