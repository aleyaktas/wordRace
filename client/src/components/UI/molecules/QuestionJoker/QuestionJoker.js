import React from "react";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import style from "./QuestionJoker.style";

const QuestionJoker = ({ time, handleJoker, usedJokers }) => {
  const styles = style();

  return (
    <div style={styles.container}>
      <Button
        onClick={() => handleJoker(0)}
        disabled={usedJokers.includes(0)}
        className="firstJokerButton hoverJoker"
        buttonColor={usedJokers.includes(0) ? "gray" : "#6EBA9D"}
        width="5rem"
        height="5rem"
        borderRadius="5rem"
        iconName="FiftyPercentJoker"
        iconSize="5rem"
        iconColor="white"
      />
      <div style={styles.time}>
        <Text text={time} fontSize="2.5rem" color="white" />
      </div>
      <Button
        onClick={() => handleJoker(1)}
        disabled={usedJokers.includes(1)}
        className="secondJokerButton hoverJoker"
        buttonColor={usedJokers.includes(1) ? "gray" : "#6EBA9D"}
        width="5rem"
        height="5rem"
        borderRadius="5rem"
        iconName="PassJoker"
        iconSize="5rem"
        iconColor="white"
      />
    </div>
  );
};

export default QuestionJoker;
