import React from "react";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import style from "./QuestionJoker.style";

const QuestionJoker = ({ time, handleJoker, usedJokers }) => {
  const styles = style();

  return (
    <div style={styles.container}>
      <Button
        onClick={() => handleJoker("fifty_fifty")}
        disabled={usedJokers.includes("fifty_fifty")}
        className={`firstJokerButton ${usedJokers.includes("fifty_fifty") ? "" : "hoverJoker"}`}
        buttonColor={usedJokers.includes("fifty_fifty") ? "gray" : "#6EBA9D"}
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
        onClick={() => handleJoker("double_chance")}
        disabled={usedJokers.includes("double_chance")}
        className={`secondJokerButton ${usedJokers.includes("double_chance") ? "" : "hoverJoker"}`}
        buttonColor={usedJokers.includes("double_chance") ? "gray" : "#6EBA9D"}
        width="5rem"
        height="5rem"
        borderRadius="5rem"
        iconName="DoubleChanceJoker"
        iconSize="5rem"
        iconColor="white"
      />
    </div>
  );
};

export default QuestionJoker;
