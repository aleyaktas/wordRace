import React from "react";
import Icon from "../../../../assets/icons/Icon";
import Text from "../../atoms/Text/Text";
import ScoreItemList from "../../organisms/ScoreItemList/ScoreItemList";
import style from "./ScoreCard.style";

const ScoreCard = ({ iconName, room }) => {
  const styles = style();
  const scores = [0, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000];
  console.log(room);
  return (
    <div style={styles.container}>
      <Text text="SCORE" font="InterSemiBold" textAlign="center" color="#444040" fontSize="1.8rem" />
      <ScoreItemList scores={scores.reverse()} />
      {room.players && (
        <div style={{ width: "5rem", height: "5rem", overflow: "hidden" }}>
          <img className="firstUser" src={room?.players[0]?.image} alt="profile" />
          <img className="secondUser" src={room?.players[1]?.image} alt="profile" />
        </div>
      )}

      {/* <Icon className="firstUser" name={iconName} />
      <Icon className="secondUser" name={iconName} /> */}
    </div>
  );
};

export default ScoreCard;
