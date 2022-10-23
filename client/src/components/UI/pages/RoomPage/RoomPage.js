import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import CreateRoomModal from "../../molecules/CreateRoomModal/CreateRoomModal";
import OnlineRoomCard from "../../organisms/OnlineRoomCard/OnlineRoomCard";
import style from "./RoomPage.style";
import socket from "../../../../utils/socket";
import { useAppDispatch } from "../../../../store";
import { getRooms } from "../../../../store/features/auth/authSlice";
import { getTopScores } from "./actions";

const RoomPage = ({ scores }) => {
  const styles = style();
  const [isOpen, setIsOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [topScores, setTopScores] = useState([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.on("get_rooms", ({ rooms }) => {
      setRooms(rooms);
      dispatch(getRooms(rooms));
      console.log(rooms);
    });
    getTopScores(setTopScores);
  }, []);

  let publicRoomCount = rooms.filter((room) => room.isPublic).length;
  return (
    <div>
      {rooms && rooms.length > 0 && publicRoomCount > 0 && (
        <div style={styles.container}>
          <OnlineRoomCard />
          <div style={styles.scoreCard}>
            <div style={styles.text}>
              <Text font="InterSemiBold" fontSize="1.8rem" color="white" text="TOP 10" />
            </div>
            {topScores.map((player, index) => {
              return (
                <div key={index} style={styles.score}>
                  <Text font="InterSemiBold" fontSize="1.8rem" text={`${index + 1}. ${player.username} ${player.score}`} />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {publicRoomCount === 0 && (
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
            {topScores.map((player, index) => {
              return (
                <div key={index} style={styles.score}>
                  <Text font="InterSemiBold" fontSize="1.8rem" text={`${index + 1}. ${player.username} ${player.score}`} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomPage;
