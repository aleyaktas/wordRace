import React from "react";
import Modal from "@mui/material/Modal";
import "../../style.css";
import PropTypes from "prop-types";
import style from "./PlayAgainModal.style";
import Button from "../../atoms/Button/Button";
import ModalHeader from "../Modals/ModalHeader/ModalHeader";
import { deleteFriend, editGameHistory, getFriends } from "../../../../store/features/auth/authSlice";
import { useAppDispatch } from "../../../../store";
import socket from "../../../../utils/socket";
import { useNavigate } from "react-router-dom";

const PlayAgainModal = ({ isOpen, modalClose, gameResult, username, onClick }) => {
  const styles = style();
  const navigate = useNavigate();

  return (
    <>
      <Modal open={isOpen} sx={styles.rootContainer} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="modal" style={styles.container}>
          <ModalHeader
            icon
            iconName={gameResult === "draw" ? "Draw" : gameResult === username ? "Win" : "Lose"}
            modalClose={modalClose}
            text={gameResult === "draw" ? "Draw" : gameResult === username ? "You Won" : "You Lost"}
            description="Do you want to play again?"
          />
          <div style={styles.body}>
            <Button
              className="buttonHoverGoldenYellow"
              onClick={(e) => onClick("no")}
              fontSize="1.6rem"
              padding="0.8rem"
              text="No"
              width="40%"
              border="1px solid gray"
              buttonColor="transparent"
            />
            <Button className="buttonHoverGold" onClick={(e) => onClick("yes")} fontSize="1.6rem" padding="0.8rem" text="Yes" width="40%" buttonColor="#EBD894" />
          </div>
        </div>
      </Modal>
    </>
  );
};

PlayAgainModal.propTypes = {
  isOpen: PropTypes.bool,
};
PlayAgainModal.defaultProps = {
  isOpen: false,
};

export default PlayAgainModal;
