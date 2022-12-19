import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import CreateRoomModal from "../../molecules/CreateRoomModal/CreateRoomModal";
import OnlineRoomCard from "../../organisms/OnlineRoomCard/OnlineRoomCard";
import style from "./RoomPage.style";
import socket from "../../../../utils/socket";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { getRooms } from "../../../../store/features/auth/authSlice";
import { getTopScores } from "./actions";
import Icon from "../../../../assets/icons/Icon";
import { useFocusEffect } from "@react-navigation/core";

const RoomPage = () => {
  const styles = style();
  const [isOpen, setIsOpen] = useState(false);
  const [topScores, setTopScores] = useState([]);

  const dispatch = useAppDispatch();
  const rooms = useAppSelector((state) => state.auth.rooms);

  useEffect(() => {
    socket.on("get_rooms", ({ rooms }) => {
      console.log(rooms);
      dispatch(getRooms(rooms));
    });
    getTopScores(setTopScores);
  }, [rooms, dispatch]);

  console.log(rooms);

  let publicRoomCount = rooms?.filter((room) => room?.isPublic)?.length;
  return (
    <div>
      {rooms && rooms?.length > 0 && publicRoomCount > 0 && (
        <div style={styles.container}>
          <OnlineRoomCard />
          <div style={styles.scoreCard}>
            <div style={styles.text}>
              <Text font="InterSemiBold" fontSize="1.8rem" color="white" text="TOP 10" />
            </div>
            {topScores.map((player, index) => {
              if (player.score > 0) {
                return (
                  <div key={index} style={styles.score}>
                    <div style={{ display: "contents" }}>
                      <Text font="InterSemiBold" fontSize="1.4rem" text={`${index + 1}.\u00A0`} />
                      <Text font="InterSemiBold" fontSize="1.4rem" text={` ${player.username}`} />
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <Text color="#0b852d" font="InterSemiBold" fontSize="1.4rem" text={`${player.score}p`} />{" "}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
      {publicRoomCount === 0 && (
        <div style={styles.containerNoRoom}>
          <div style={styles.roomText}>
            <Text text="😕 Currently there are no online rooms" font="PoppinsRegular" />
          </div>

          {isOpen && <CreateRoomModal rooms={rooms} isOpen={isOpen} modalClose={() => setIsOpen(false)} />}
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
              <Icon name="Winners" color="rgb(235, 216, 148)" width="2rem" height="2rem" />
              <Text font="InterSemiBold" fontSize="1.8rem" color="white" text="TOP 10" margin="0 0 0 0.4rem" />
            </div>
            {topScores.map((player, index) => {
              if (player.score > 0) {
                return (
                  <div key={index} style={styles.score}>
                    <div style={{ display: "contents" }}>
                      <Text font="InterSemiBold" fontSize="1.4rem" text={`${index + 1}.\u00A0`} />
                      <Text font="InterSemiBold" fontSize="1.4rem" text={` ${player.username}`} />
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <Text color="#0b852d" font="InterSemiBold" fontSize="1.4rem" text={`${player.score}p`} />{" "}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomPage;
