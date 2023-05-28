import React from "react";
import Text from "../../atoms/Text/Text";
import PropTypes from "prop-types";
import style from "./RoomCard.style";
import socket from "../../../../utils/socket";
import { useAppSelector } from "../../../../store";
import { useNavigate } from "react-router-dom";
import { showMessage } from "../../../../utils/showMessage";
import Icon from "../../../../assets/icons/Icon";

const RoomCard = ({ room, margin }) => {
  const styles = style({ margin });
  const { username, profileImage } = useAppSelector((state) => state?.auth?.user);
  const { rooms } = useAppSelector((state) => state?.auth);
  const navigate = useNavigate();
  const { id, name, image, timer, players, questions } = room;
  const roomId = id;

  const onClick = () => {
    const joinRoom = rooms.find((room) => room.id === roomId);

    if (joinRoom && joinRoom.players.length < 2) {
      socket.emit("join_room", { user: { username, image: profileImage }, roomId });
      navigate(`/rooms/${id}`);
      showMessage("You have joined the room", "success");
    } else {
      showMessage("This room is full", "warning");
    }
  };

  return (
    <button className="buttonHoverRoomCard roomCardContainer" onClick={onClick} style={styles.cardContainer}>
      <div className="roomCard" style={styles.card}>
        <Icon className="roomImg" name={image} alt={image} width="100" height="100" />
      </div>
      <div style={{ ...styles.card, ...styles.cardFooter }} className="card-footer">
        <Text font="InterRegular" text={name} color="#556577" textAlign="center" />
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
  name: "Room Name",
  image: "Bear",
};

export default RoomCard;
