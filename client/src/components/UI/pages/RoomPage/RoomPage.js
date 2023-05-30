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
import { useNavigate } from "react-router-dom";
import { showMessage } from "../../../../utils/showMessage";
const { v4: uuidv4 } = require("uuid");

const RoomPage = () => {
  const styles = style();
  const [isOpen, setIsOpen] = useState(false);
  const [topScores, setTopScores] = useState([]);

  const [roomName, setRoomName] = useState("");
  const [timer, setTimer] = useState(20);
  const [isPublic, setIsPublic] = useState("Public");
  const { username, profileImage } = useAppSelector((state) => state?.auth.user);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const rooms = useAppSelector((state) => state.auth.rooms);

  useEffect(() => {
    socket.on("get_rooms", ({ rooms }) => {
      console.log("get_rooms");
      console.log(rooms);
      dispatch(getRooms(rooms));
    });
    getTopScores(setTopScores);
  }, [rooms, dispatch]);

  const onClickSubmit = (e) => {
    e.preventDefault();
    console.log(rooms);
    const roomId = uuidv4();
    if (roomName.length === 0) {
      showMessage("Room name cannot be empty", "error");
    } else if (roomName.length < 3) {
      showMessage("Room name must be at least 4 characters", "error");
    } else if (rooms.find((room) => room.name === roomName)) {
      showMessage("Room name already exists", "error");
    } else if (roomName.length > 3) {
      socket.emit("create_room", {
        user: {
          username,
          image: profileImage,
        },
        roomName,
        roomId,
        timer,
        isPublic: isPublic === "Public" ? true : false,
      });
      navigate(`/rooms/${roomId}`, { state: { isPublic } });
      // modalClose();
      setIsOpen(false);
    }
  };

  let publicRoomCount = rooms?.filter((room) => room?.isPublic)?.length;
  return (
    <div>
      {rooms && rooms?.length > 0 && publicRoomCount > 0 && (
        <div className="roomContainer" style={styles.container}>
          <OnlineRoomCard setIsPublic={setIsPublic} setTimer={setTimer} setRoomName={setRoomName} roomName={roomName} onClickSubmit={onClickSubmit} />
          <div className="scoreCard" style={styles.scoreCard}>
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
          <div className="roomText" style={styles.roomText}>
            <Text text="😕 Currently there are no online rooms" font="PoppinsRegular" />
          </div>

          {isOpen && (
            <CreateRoomModal
              setIsPublic={setIsPublic}
              setTimer={setTimer}
              setRoomName={setRoomName}
              roomName={roomName}
              onClickSubmit={onClickSubmit}
              rooms={rooms}
              isOpen={isOpen}
              modalClose={() => setIsOpen(false)}
            />
          )}
          <div style={{ height: "fit-content" }} onClick={() => setIsOpen(true)}>
            <Button
              className="buttonHoverGold createRoomButton plusIcon"
              text="Create Room"
              font="RobotoMedium"
              fontSize="1.7rem"
              width="20rem"
              height="5rem"
              borderRadius="1rem"
              iconPosition="right"
              buttonColor="#EBD894"
              iconName="Plus"
              iconColor="dark"
            />
          </div>

          <div className="scoreCard" style={styles.scoreCard}>
            <div style={styles.text}>
              <Icon name="Winners" color="rgb(235, 216, 148)" width="2rem" height="2rem" />
              <Text font="InterSemiBold" fontSize="1.8rem" color="white" text="TOP 10" margin="0 0 0 0.4rem" />
            </div>
            {topScores.map((player, index) => {
              console.log(player);
              console.log(topScores);
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
