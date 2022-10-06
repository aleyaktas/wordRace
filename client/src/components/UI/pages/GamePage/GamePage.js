import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import style from "./GamePage.style";
import { Animated } from "react-animated-css";
import FriendItemListModal from "../../molecules/FriendItemListModal/FriendItemListModal";
import SidebarItemList from "../../organisms/SidebarItemList/SidebarItemList";
import QuestionCard from "../../molecules/QuestionCard/QuestionCard";
import ScoreCard from "../../molecules/ScoreCard/ScoreCard";
import { useAppSelector } from "../../../../store";
import socket from "../../../../utils/socket";

const GamePage = ({ question, time }) => {
  const styles = style();
  const [isOpen, setIsOpen] = useState(false);
  const { username } = useAppSelector((state) => state.auth.user);

  const onlineUsers = useAppSelector((state) => state.auth.onlineUsers.filter((user) => user.username !== username));
  const allFriends = useAppSelector((state) => state.auth.user.friends);
  const onlineFriends = onlineUsers.filter((item) => allFriends.some((i) => i.username === item.username));
  const [room, setRoom] = useState({});
  useEffect(() => {
    socket.on("room_created", ({ room }) => {
      console.log(room);
      setRoom(room);
    });
    socket.on("room_joined", ({ room }) => {
      console.log(room);
      setRoom(room);
    });
    socket.on("leave_room", ({ room }) => {
      console.log(room);
      setRoom(room);
    });
  }, [room]);
  useEffect(() => {
    return () => {
      socket.emit("left_room", { username });
    };
  }, []);

  return (
    <div>
      {room && room.players && room.players.length === 1 ? (
        <div>
          {isOpen && <FriendItemListModal friends={onlineFriends} modalType="inviteModal" isOpen={isOpen} modalClose={() => setIsOpen(false)} />}
          <div style={styles.button} onClick={() => setIsOpen(true)}>
            <Button
              className="buttonHoverGold"
              text="Invite Your Friend"
              font="RobotoMedium"
              fontSize="1.8rem"
              width="20rem"
              height="4rem"
              margin="2rem 2rem 2rem auto"
              borderRadius="1rem"
              iconPosition="right"
              buttonColor="#EBD894"
              iconName="AddFriend"
            />
          </div>

          <div style={styles.headerText}>
            {room && room.name && (
              <Text
                text={`${room?.players[0]?.username || "Waiting"}  ${room?.players[0]?.score || 0} ${room?.players[1]?.score || 0} ${room?.players[1]?.username || "Waiting"} `}
                font="InterBold"
                fontSize="2.4rem"
                color="#6B5814"
              />
            )}
          </div>

          <div style={styles.bodyText}>
            <Animated animationIn="zoomIn" animationInDuration={1200} isVisible={true}>
              {" "}
              <Text text="Waiting for other player" font="RedHatMonoRegular" fontSize="2.4rem" color="#6B5814" />
            </Animated>
          </div>
        </div>
      ) : (
        <div style={styles.container}>
          <SidebarItemList />
          <QuestionCard />
          <ScoreCard iconName="User" />
        </div>
      )}
    </div>
  );
};

export default GamePage;
