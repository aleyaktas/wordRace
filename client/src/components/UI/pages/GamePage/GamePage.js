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
import { showMessage } from "../../../../utils/showMessage";
import { useLocation, useNavigate } from "react-router-dom";

const GamePage = () => {
  const styles = style();
  const [isOpen, setIsOpen] = useState(false);
  const { username } = useAppSelector((state) => state.auth.user);
  const onlineUsers = useAppSelector((state) => state.auth.onlineUsers.filter((user) => user.username !== username));
  const allFriends = useAppSelector((state) => state.auth.user.friends);
  const onlineFriends = onlineUsers.filter((item) => allFriends.some((i) => i.username === item.username));
  const [room, setRoom] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    socket.on("room_created", ({ room }) => {
      console.log(room);
      setRoom(room);
    });
    socket.on("room_joined", ({ room, joinUser }) => {
      console.log(room);
      console.log(username);
      setRoom(room);
      if (joinUser !== username) {
        showMessage(`${username} has joined the room`, "success");
      }
    });
    socket.on("leave_room", ({ room, disconnectUser }) => {
      if (username === disconnectUser) {
        navigate("/rooms");
      }
      console.log(room);
      console.log(username);
      console.log(disconnectUser);
      setRoom(room);
    });
    socket.on("correct_answered", ({ room }) => {
      console.log(room);
      setRoom(room);
    });
    socket.on("wrong_answered", ({ room }) => {
      console.log(room);
      setRoom(room);
    });
  }, []);

  useEffect(() => {
    return () => {
      socket.emit("left_room", { username });
    };
  }, []);

  const checkAnswer = (answer) => {
    const findMe = room.players.find((player) => player.username === username);
    if (findMe.isYourTurn) {
      console.log(answer);
      console.log(room.questions[room.questionIndex].answer);
      if (answer === room.questions[room.questionIndex].answer) {
        socket.emit("correct_answer", { username, roomId: room.id });
        return showMessage("Correct Answer", "success");
      }
      socket.emit("wrong_answer", { username, roomId: room.id });
      showMessage("Wrong Answer", "error");
    }
  };

  const handleJoker = (joker) => {
    const findMe = room.players.find((player) => player.username === username);
    if (findMe.isYourTurn) {
      console.log(joker);
    }
  };

  return (
    <div>
      {room && room.players && room.players.length === 1 && (
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
      )}
      {room && room.players && room.players.length === 2 && (
        <div style={styles.container}>
          <SidebarItemList />
          <QuestionCard
            timer={room?.timer}
            question={room.questions[room.questionIndex]}
            onClick={(option) => checkAnswer(option)}
            handleJoker={(joker) => handleJoker(joker)}
            usedJokers={room.players.find((player) => player.username === username).usedJokers}
          />
          <ScoreCard iconName="User" room={room} />
        </div>
      )}
    </div>
  );
};

export default GamePage;
