import React from "react";
import TextInput from "../../atoms/TextInput/TextInput";
import Modal from "@mui/material/Modal";
import "../../style.css";
import PropTypes from "prop-types";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Button from "../../atoms/Button/Button";
import style from "./CreateRoomModal.style";
import ModalHeader from "../Modals/ModalHeader/ModalHeader";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const CreateRoomModal = ({ isOpen, modalClose, onClickSubmit, setIsPublic, setTimer, setRoomName, roomName }) => {
  const styles = style();

  const handleChange = (e) => {
    e.preventDefault();
    setRoomName(e.target.value.trim());
  };
  const handlePublicChange = (e) => {
    setIsPublic(e.target.value);
  };
  const handleTimerChange = (e) => {
    setTimer(parseInt(e.target.value));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickSubmit(e);
    }
  };

  return (
    <>
      <Modal open={isOpen} sx={styles.rootContainer} onClose={modalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="modal" style={styles.container}>
          <ModalHeader modalClose={modalClose} iconName="CreatePlus" text="Create Room" />
          <div style={styles.body}>
            <TextInput
              value={roomName}
              onKeyDown={handleKeyPress}
              onChange={handleChange}
              className="input"
              font="InterRegular"
              placeHolder="Room Name"
              fontSize="1.8rem"
              type="text"
            />
            <div style={styles.checkbox}>
              <Box className="timer" sx={{ width: "25%", margin: "0 3rem 0 0" }}>
                <FormControl fullWidth>
                  <InputLabel sx={{ fontSize: "2rem" }} variant="standard" htmlFor="uncontrolled-native">
                    Timer
                  </InputLabel>
                  <NativeSelect
                    onChange={handleTimerChange}
                    sx={{ fontSize: "1.5rem" }}
                    defaultValue={20}
                    inputProps={{
                      name: "timer",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                  </NativeSelect>
                </FormControl>
              </Box>
              <Checkbox
                onChange={handlePublicChange}
                isCheck
                className="input"
                fontSize="1.5rem"
                margin="2rem 0.8rem 0 0"
                checboxColor="#709F60"
                color="#6B5814"
                text="Public"
              />
              <Checkbox onChange={handlePublicChange} className="input" fontSize="1.5rem" margin="2rem 0 0 0" checboxColor="#709F60" color="#6B5814" text="Private" />
            </div>
            <Button
              className="buttonHoverGold"
              onClick={onClickSubmit}
              fontSize="1.6rem"
              margin="2rem 0 0 0"
              padding="1rem"
              text="Create"
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
