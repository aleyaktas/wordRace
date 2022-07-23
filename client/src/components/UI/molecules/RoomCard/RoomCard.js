import React from "react";
import Text from "../../atoms/Text/Text";
import PropTypes from "prop-types";
import style from "./RoomCard.style";

const RoomCard = ({ onClick, roomName, roomImage, className, margin }) => {
  const styles = style({ margin });

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
