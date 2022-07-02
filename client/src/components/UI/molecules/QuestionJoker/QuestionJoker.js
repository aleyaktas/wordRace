import React from "react";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import style from "./QuestionJoker.style";

const QuestionJoker = ({ time }) => {
  const styles = style();
  return (
    <>
      <div style={styles.container}>
        <Button
          className="firstJokerButton"
          buttonColor="#6EBA9D"
          width="5rem"
          height="5rem"
          borderRadius="5rem"
          icon
          iconName="FiftyPercentJoker"
          iconSize="5rem"
          iconColor="white"
          text=""
        />
        <div style={styles.time}>
          <Text text={time} fontSize="2.5rem" color="white" />
        </div>
        <Button
          className="secondJokerButton"
          buttonColor="#6EBA9D"
          width="5rem"
          height="5rem"
          borderRadius="5rem"
          icon
          iconName="PassJoker"
          iconSize="5rem"
          iconColor="white"
          text=""
        />
      </div>
    </>
  );
};

export default QuestionJoker;
