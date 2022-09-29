import React from "react";
import PropTypes from "prop-types";
import style from "./RoomCardList.style";
import RoomCard from "../../molecules/RoomCard/RoomCard";

const RoomCardList = ({ rooms }) => {
  const styles = style();

  return (
    <div style={styles.container}>
      {rooms.map((room) => (
        <RoomCard roomId={room.id} roomName={room.name} roomImage={room.image} />
      ))}
    </div>
  );
};
RoomCardList.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.object),
};
RoomCardList.defaultProps = {
  rooms: null,
};

export default RoomCardList;
