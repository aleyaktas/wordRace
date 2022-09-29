import React from "react";
import Text from "../../atoms/Text/Text";
import PropTypes from "prop-types";
import style from "./RoomCard.style";
import socket from "../../../../utils/socket";
import { useAppSelector } from "../../../../store";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ roomId, roomName, roomImage, margin }) => {
  const styles = style({ margin });
  const username = useAppSelector((state) => state.auth?.user?.username);
  const navigate = useNavigate();

  const onClick = () => {
    socket.emit("join_room", username, roomName, roomId);
    navigate(`/rooms/:${roomId}`);
  };

  return (
    <button className="buttonHoverRoomCard" onClick={onClick} style={styles.cardContainer}>
      <div style={styles.card}>
        <img src={require(`../../../../assets/images/${roomImage}.png`)} alt="Bear" width="100" height="100" />
      </div>
      <div style={{ ...styles.card, ...styles.cardFooter }} className="card-footer">
        <Text font="InterRegular" text={roomName} color="#556577" textAlign="center" />
      </div>
    </button>
  );
};

RoomCard.propTypes = {
  roomName: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
RoomCard.defaultProps = {
  width: "22rem",
  height: "20rem",
  roomName: "Room Name",
  roomImage: "Bear",
};

export default RoomCard;
