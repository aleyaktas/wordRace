import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import CreateRoomModal from "../../molecules/CreateRoomModal/CreateRoomModal";
import OnlineRoomCard from "../../organisms/OnlineRoomCard/OnlineRoomCard";
import style from "./RoomPage.style";
import socket from "../../../../utils/socket";

const RoomPage = ({ scores }) => {
  const styles = style();
  const [isOpen, setIsOpen] = useState(false);
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    socket.on("get_rooms", ({ rooms }) => {
      setRoomList(rooms);
    });
    socket.on("room_created", ({ rooms }) => {
      setRoomList(rooms);
    });
  }, [setRoomList]);

  if (roomList.length > 0) {
    return (
      <div style={styles.container}>
        <OnlineRoomCard rooms={roomList} />
        <div style={styles.scoreCard}>
          <div style={styles.text}>
            <Text font="InterSemiBold" fontSize="1.8rem" color="white" text="TOP 10" />
          </div>
          {scores.map((score, index) => {
            return (
              <div key={index} style={styles.score}>
                <Text font="InterSemiBold" fontSize="1.8rem" text={`${index + 1}. ${score.name} ${score.score}`} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (roomList.length === 0) {
    return (
      <div style={styles.containerNoRoom}>
        <div style={styles.roomText}>
          <Text text="😕 Currently there are no online rooms" font="PoppinsRegular" />
        </div>

        {isOpen && <CreateRoomModal isOpen={isOpen} modalClose={() => setIsOpen(false)} />}
        <div onClick={() => setIsOpen(true)}>
          <Button
            className="buttonHoverGold"
            text="Create Room"
            font="RobotoMedium"
            fontSize="1.7rem"
            width="20rem"
            height="3.8rem"
            borderRadius="1rem"
            iconPosition="right"
            buttonColor="#EBD894"
            iconName="Plus"
          />
        </div>

        <div style={styles.scoreCard}>
          <div style={styles.text}>
            <Text font="InterSemiBold" fontSize="1.8rem" color="white" text="TOP 10" />
          </div>
          {scores.map((score, index) => {
            return (
              <div key={index} style={styles.score}>
                <Text font="InterSemiBold" fontSize="1.8rem" text={`${index + 1}. ${score.name} ${score.score}`} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default RoomPage;
