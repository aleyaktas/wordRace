import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./RoomCardList.style";
import RoomCard from "../../molecules/RoomCard/RoomCard";
import { useAppSelector } from "../../../../store";

const RoomCardList = () => {
  const styles = style();
  const rooms = useAppSelector((state) => state.auth.rooms);

  return (
    <div style={styles.container}>
      {rooms?.map((room) => (
        <>{room.isPublic === true && <RoomCard room={room} />}</>
      ))}
    </div>
  );
};

export default RoomCardList;
