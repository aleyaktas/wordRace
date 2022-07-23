import React from "react";
import Text from "../../atoms/Text/Text";
import RoomCardList from "../RoomCardList/RoomCardList";
import Button from "../../atoms/Button/Button";
import style from "./OnlineRoomCard.style";

const OnlineRoomCard = ({ rooms }) => {
  const styles = style();
  return (
    <div style={styles.container}>
      <div style={styles.text}>
        <Text text="Online Rooms" color="white" font="InterSemiBold" fontSize="2rem" />
      </div>
      <div style={styles.body}>
        <div style={styles.button}>
          <Button text="Create Room" width="20rem" height="3.8rem" margin="2rem 1rem 2rem auto" borderRadius="1rem" icon iconPosition="end" buttonColor="#EBD894" iconName="Plus" />
        </div>
        <RoomCardList rooms={rooms} />
      </div>
    </div>
  );
};

export default OnlineRoomCard;
