import React, { useEffect, useRef, useState } from "react";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import style from "./GamePage.style";
import { Animated } from "react-animated-css";
import FriendItemListModal from "../../molecules/FriendItemListModal/FriendItemListModal";
import SidebarItemList from "../../organisms/SidebarItemList/SidebarItemList";
import QuestionCard from "../../molecules/QuestionCard/QuestionCard";
import ScoreCard from "../../molecules/ScoreCard/ScoreCard";
import { useAppDispatch, useAppSelector } from "../../../../store";
import socket from "../../../../utils/socket";
import { showMessage } from "../../../../utils/showMessage";
import { useLocation, useNavigate } from "react-router-dom";
import PlayAgainModal from "../../molecules/PlayAgainModal/PlayAgainModal";

const GamePage = () => {
  const styles = style();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMsgBox, setIsOpenMsgBox] = useState(false);
  const [isOpenPlayAgain, setIsOpenPlayAgain] = useState(false);
  const chatRef = useRef();
  const [pause, setPause] = useState(false);
  const [room, setRoom] = useState({});
  const [gameResult, setGameResult] = useState("");
  const [doubleChance, setDoubleChance] = useState(false);
  const [timeProgress, setTimeProgress] = useState(0);
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { username } = useAppSelector((state) => state.auth.user);
  const onlineUsers = useAppSelector((state) => state.auth.onlineUsers.filter((user) => user.username !== username));
  const allFriends = useAppSelector((state) => state.auth.user.friends);
  const onlineFriends = onlineUsers?.filter((item) => allFriends?.some((i) => i.username === item.username));
  const offlineFriends = allFriends?.filter((item) => !onlineFriends?.some((i) => i.username === item.username));
  const onlineUsersLength = onlineUsers?.length;
  console.log("onlineFriends", onlineFriends);
  console.log("offlineFriends", offlineFriends);

  useEffect(() => {
    socket.on("room_created", ({ room }) => {
      console.log(room);
      setRoom(room);
    });
    socket.on("room_joined", ({ room, joinUser }) => {
      console.log("username", username);
      setRoom(room);
      setPause(false);
      console.log(joinUser);
      console.log(username);

      setTimeProgress(room.timer);
      if (joinUser !== username) {
        console.log("joinUser", joinUser);
        console.log("username", username);
        showMessage(`${joinUser} has joined the room`, "success");
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
      console.log(room.questionIndex);
      console.log(room.questions.length - 1);

      if (room.questionIndex <= room.questions.length - 1) {
        setTimeProgress(room.timer);
        setRoom(room);
      }
    });
    socket.on("wrong_answered", ({ room }) => {
      console.log(room);
      console.log(room.questionIndex);
      console.log(room.questions.length);

      if (room.questionIndex <= room.questions.length - 1) {
        setTimeProgress(room.timer);
        setRoom(room);
      }
    });
    socket.on("fifty_fifty_joker_used", ({ room }) => {
      console.log(room);
      setRoom(room);
    });
    socket.on("double_chance_joker_used", ({ room }) => {
      setRoom(room);
    });
    socket.on("game_finished", ({ result, room }) => {
      setPause(true);
      console.log("game finished", room);
      setRoom(room);
      result === "draw" ? setGameResult("draw") : setGameResult(result.username);
      setIsOpenPlayAgain(true);
    });

    socket.on("started_play_again", ({ room }) => {
      console.log(room);
      setTimeProgress(room.timer);
      setRoom(room);
      const findMe = room.players.find((player) => player.username === username);
    });
    socket.on("opponent_quit", ({ username, room }) => {
      setRoom(room);

      showMessage(`${username} has left the room`, "info");
      console.log(room);
    });
    socket.on("message_received", ({ message }) => {
      setMessages((oldMessages) => [...oldMessages, message]);
    });
  }, []);

  useEffect(() => {
    return () => {
      socket.emit("left_room", { username });
      socket.off("room_joined");
      socket.off("room_created");
      socket.off("leave_room");
      socket.off("correct_answered");
      socket.off("wrong_answered");
      socket.off("fifty_fifty_joker_used");

      socket.off("game_finished");
      socket.off("started_play_again");
      socket.off("opponent_quit");
      socket.off("message_received");
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeProgress((prevProgress) => (prevProgress <= 0 ? 0 : prevProgress - 1));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (room.players && timeProgress === 0 && room.players.find((player) => player.isYourTurn)?.username === username && !pause) {
      socket.emit("wrong_answer", { username, roomId: room.id });
      setTimeProgress(room.timer);
      showMessage("Time is up!", "error");
    }
  }, [timeProgress]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpenMsgBox(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [chatRef]);

  const checkAnswer = (answer) => {
    const findMe = room.players.find((player) => player.username === username);
    if (findMe.isYourTurn) {
      console.log(answer);

      console.log(room.questions[room.questionIndex].answer);
      if (answer === room.questions[room.questionIndex].answer) {
        socket.emit("correct_answer", { username, roomId: room.id });
        doubleChance && setDoubleChance(false);
        showMessage("Correct Answer", "success");
      }
      if (room.questionIndex === 19) {
        console.log(room);

        socket.emit("game_over", { roomId: room.id });
      }

      if (doubleChance && answer !== room.questions[room.questionIndex].answer) {
        console.log("b");
        setDoubleChance(false);
        return showMessage("Wrong Answer", "error");
      }
      if (answer !== room.questions[room.questionIndex].answer) {
        socket.emit("wrong_answer", { username, roomId: room.id });
        showMessage("Wrong Answer", "error");
      }
    }
  };

  const onClickAgainGame = (value) => {
    setIsOpenPlayAgain(false);
    if (value === "yes") {
      socket.emit("play_again", { roomId: room.id, username });
    } else {
      navigate("/rooms");
      socket.emit("quit_game", { roomId: room.id, username });
    }
  };

  const onClickSidebarItem = (sidebarItem) => {
    console.log(sidebarItem);
    if (sidebarItem === "Message") {
      setIsOpenMsgBox(true);
    }
  };

  const handleMessageChange = (e) => {
    setMsg(e.target.value);
  };

  const onClickSendMsg = () => {
    if (msg.trim() !== "") {
      socket.emit("send_message", { username, roomId: room.id, msg });
      setMsg("");
      setIsOpenMsgBox(false);
    }
  };

  const handleJoker = (joker) => {
    const findMe = room.players.find((player) => player.username === username);
    console.log(joker);
    console.log(findMe.usedJokers);

    if (findMe.isYourTurn && !findMe.usedJokers.includes(joker)) {
      console.log(joker);
      if (joker === "fifty_fifty") {
        socket.emit("fifty_fifty_joker", { username, roomId: room.id });
      }
      if (joker === "double_chance") {
        setDoubleChance(true);
        socket.emit("double_chance_joker", { username, roomId: room.id });
      }
    }
  };

  return (
    <div>
      {room && room.players && room.players?.filter((player) => player.isReady).length === 1 && (
        <div>
          {isOpen && (
            <FriendItemListModal
              friends={onlineFriends}
              onlineUsersLength={onlineUsersLength}
              offlineFriends={offlineFriends}
              modalType="inviteModal"
              isOpen={isOpen}
              modalClose={() => setIsOpen(false)}
            />
          )}
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
                text={`${room?.players[0]?.username || "Waiting"}  ${room?.players[0]?.score || 0} ${room?.players[1]?.score || 0} ${
                  room?.players[1]?.username || "Waiting"
                } `}
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
      {room && room.players && room.players.length === 2 && room.players?.filter((player) => player.isReady).length === 2 && (
        <div style={styles.container}>
          <SidebarItemList
            onlineUsersLength={onlineUsersLength}
            offlineFriends={offlineFriends}
            onlineFriends={onlineFriends}
            onClickSend={onClickSendMsg}
            onChangeMsg={(e) => handleMessageChange(e)}
            isOpen={isOpenMsgBox}
            onClick={(sidebarItem) => onClickSidebarItem(sidebarItem)}
            chatRef={chatRef}
          />
          {/* {room.players?.filter((player) => player.isReady).length === 1 ? (
            <Animated animationIn="zoomIn" animationInDuration={1200} isVisible={true}>
              {" "}
              <Text text="Waiting for other player's decision" font="RedHatMonoRegular" fontSize="2.4rem" color="#6B5814" />
            </Animated>
          ) : ( */}
          <QuestionCard
            username={username}
            messages={messages}
            timer={
              room.players.find((player) => player.username === username).isYourTurn &&
              room.players.length === 2 &&
              room.players?.filter((player) => player.isReady).length === 2
                ? timeProgress
                : "Wait"
            }
            question={room.questions[room.questionIndex]}
            onClick={(option) => checkAnswer(option)}
            handleJoker={(joker) => handleJoker(joker)}
            usedJokers={room.players.find((player) => player.username === username).usedJokers}
          />
          {/* )} */}
          <ScoreCard
            firstUser={room.players[0].username === username ? room.players[1] : room.players[0]}
            secondUser={room.players[1].username === username ? room.players[1] : room.players[0]}
          />
        </div>
      )}
      <PlayAgainModal
        onClick={(value) => onClickAgainGame(value)}
        gameResult={gameResult}
        isOpen={isOpenPlayAgain}
        setIsOpen={setIsOpenPlayAgain}
        modalClose={() => setIsOpenPlayAgain(false)}
        username={username}
      />
    </div>
  );
};

export default GamePage;
