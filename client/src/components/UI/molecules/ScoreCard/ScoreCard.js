import React from "react";
import Icon from "../../../../assets/icons/Icon";
import Text from "../../atoms/Text/Text";
import ScoreItemList from "../../organisms/ScoreItemList/ScoreItemList";
import style from "./ScoreCard.style";

const ScoreCard = ({ firstUser, secondUser }) => {
  const styles = style();
  return (
    <div className="scoreCardContainer" style={styles.container}>
      <Text text="SCORE" font="InterSemiBold" textAlign="center" color="#444040" fontSize="1.8rem" />
      <ScoreItemList firstUser={firstUser} secondUser={secondUser} />
    </div>
  );
};

export default ScoreCard;
