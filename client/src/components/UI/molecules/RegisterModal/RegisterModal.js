import Text from "../../atoms/Text/Text";
import TextInput from "../../atoms/TextInput/TextInput";
import Button from "../../atoms/Button/Button";
import Modal from "@mui/material/Modal";
import "../../style.css";
import PropTypes from "prop-types";
import style from "./RegisterModal.style";
import ModalHeader from "../Modals/ModalHeader/ModalHeader";
import * as Yup from "yup";
import { Formik } from "formik";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().min(4, "Minumum 4 Character required ").max(30, "Too Long!").required("Please enter your username"),
  email: Yup.string().email("Invalid email").required("Please enter your email"),
  password: Yup.string().min(6, "Minumum 6 Character required").max(30, "Too Long!").required("Please enter your password"),
});

const RegisterModal = ({ isOpen, setIsOpen, modalClose, handleSubmit }) => {
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
          <ModalHeader modalClose={modalClose} iconName="RegisterUser" text="Sign Up" />
          <div style={styles.body}>
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
              }}
              validationSchema={RegisterSchema}
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
                    value={values.email}
                    font="InterRegular"
                    placeHolder="Email"
                    iconName="Mail"
                    fontSize="1.6rem"
                    margin="0 0 1.5rem 0"
                    type="text"
                  />
                  {errors.email && touched.email && <Text text={errors.email} fontSize="1rem" color="#ff4e4e" margin="0 0 1rem 0" />}
                  <TextInput
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    onKeyDown={handleKeyPress}
                    font="InterRegular"
                    placeHolder="Password"
                    iconName="Lock"
                    fontSize="1.6rem"
                    margin="0 0 1.5rem 0"
                    type="password"
                  />
                  {errors.password && touched.password && <Text text={errors.password} fontSize="1rem" color="#ff4e4e" margin="0 0 1rem 0" />}
                  <Button className="buttonHoverGold" text="Sign Up" width="100%" margin="2rem 0" padding="1rem" buttonColor="#EBD894" />
                </form>
              )}
            </Formik>

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
