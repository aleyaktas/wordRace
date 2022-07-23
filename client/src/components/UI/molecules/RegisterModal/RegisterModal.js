import Text from "../../atoms/Text/Text";
import TextInput from "../../atoms/TextInput/TextInput";
import Button from "../../atoms/Button/Button";
import Modal from "@mui/material/Modal";
import "../../style.css";
import PropTypes from "prop-types";
import style from "./RegisterModal.style";
import ModalHeader from "../Modals/ModalHeader/ModalHeader";

const RegisterModal = ({ isOpen, setIsOpen, modalClose, onClick }) => {
  const styles = style();

  return (
    <>
      <Modal open={isOpen} onClose={modalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="modal" style={styles.container}>
          <ModalHeader modalClose={modalClose} icon iconName="RegisterUser" text="Sign Up" />
          <div style={styles.body}>
            <TextInput font="InterRegular" placeHolder="Username" icon="true" iconName="User" fontSize="1.6rem" margin="0 0 1.5rem 0" type="text" />
            <TextInput font="InterRegular" placeHolder="Email" icon="true" iconName="Mail" fontSize="1.6rem" margin="0 0 1.5rem 0" type="text" />
            <TextInput font="InterRegular" placeHolder="Password" icon="true" iconName="Lock" fontSize="1.6rem" margin="0 0 1.5rem 0" type="password" />
            <Button className="buttonHoverGold" onClick={onClick} text="Sign Up" iconName="User" width="100%" margin="3rem 0" padding="1rem" buttonColor="#EBD894" />
            <button className="buttonHoverBlack" style={styles.button} onClick={() => setIsOpen({ ...isOpen, isOpenState: true, componentName: "LoginModal" })}>
              <Text margin="0 0 2rem 0" textAlign="center" text="Do you have an account?" font="RobotoThin" color="#6B5814" letterSpacing="0.15rem" />
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
