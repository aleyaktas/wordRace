import React from "react";
import TextInput from "../../atoms/TextInput/TextInput";
import Modal from "@mui/material/Modal";
import "../../style.css";
import PropTypes from "prop-types";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Button from "../../atoms/Button/Button";
import style from "./CreateRoomModal.style";
import ModalHeader from "../Modals/ModalHeader/ModalHeader";

const CreateRoomModal = ({ isOpen, modalClose, onClick }) => {
  const styles = style();

  return (
    <>
      <Modal open={isOpen} onClose={modalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="modal" style={styles.container}>
          <ModalHeader modalClose={modalClose} icon iconName="CreatePlus" text="Create Room" />
          <div style={styles.body}>
            <TextInput className="input" font="InterRegular" placeHolder="Room Name" fontSize="1.8rem" type="text" />
            <div style={styles.checkbox}>
              <Checkbox className="input" fontSize="1.5rem" margin="2rem 0.8rem 0 0" checboxColor="#709F60" color="#6B5814" text="Public" isCheck />
              <Checkbox className="input" fontSize="1.5rem" margin="2rem 0 0 0" checboxColor="#709F60" color="#6B5814" text="Private" />
            </div>
            <Button
              className="buttonHoverGold"
              onClick={onClick}
              fontSize="1.6rem"
              margin="3rem 0"
              padding="1rem"
              text="Create"
              iconName="User"
              width="100%"
              buttonColor="#EBD894"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

CreateRoomModal.propTypes = {
  isOpen: PropTypes.bool,
};
CreateRoomModal.defaultProps = {
  isOpen: false,
};

export default CreateRoomModal;
