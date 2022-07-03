import React from "react";
import Icon from "../../../../assets/icons/Icon";
import Text from "../../atoms/Text/Text";
import ScoreItemList from "../../organisms/ScoreItemList/ScoreItemList";
import style from "./ScoreCard.style";

const ScoreCard = ({ iconName }) => {
  const styles = style();
  const scores = [0, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000];

  return (
    <div style={styles.container}>
      <Text text="SCORE" font="InterSemiBold" textAlign="center" color="#444040" fontSize="1.8rem" />
      <ScoreItemList scores={scores.reverse()} />
      <Icon className="firstUser" name={iconName} />
      <Icon className="secondUser" name={iconName} />
    </div>
  );
};

export default ScoreCard;
