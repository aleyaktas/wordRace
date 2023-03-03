import React, { useState } from "react";
import Text from "../../atoms/Text/Text";
import RoomCardList from "../RoomCardList/RoomCardList";
import CreateRoomModal from "../../molecules/CreateRoomModal/CreateRoomModal";
import Button from "../../atoms/Button/Button";
import style from "./OnlineRoomCard.style";

const OnlineRoomCard = ({ onClickSubmit, setIsPublic, setTimer, setRoomName, roomName }) => {
  const styles = style();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="onlineRoomCardContainer" style={styles.container}>
      <div style={styles.text}>
        <Text text="Online Rooms" color="white" font="InterSemiBold" fontSize="2rem" />
      </div>
      <div style={styles.body}>
        {isOpen && (
          <CreateRoomModal
            setIsPublic={setIsPublic}
            setTimer={setTimer}
            setRoomName={setRoomName}
            roomName={roomName}
            onClickSubmit={onClickSubmit}
            isOpen={isOpen}
            modalClose={() => setIsOpen(false)}
          />
        )}
        <div style={styles.button} onClick={() => setIsOpen(true)}>
          <Button
            className="buttonHoverGold plusIcon"
            text="Create Room"
            font="RobotoMedium"
            fontSize="1.7rem"
            width="20rem"
            height="3.8rem"
            margin="2rem 1rem 2rem auto"
            borderRadius="1rem"
            iconPosition="right"
            buttonColor="#EBD894"
            iconName="Plus"
            iconColor="dark"
          />
        </div>
        <RoomCardList />
      </div>
    </div>
  );
};

export default OnlineRoomCard;
