import React from "react";
import style from "./QuestionCard.style";
import QuestionItemList from "../../organisms/QuestionItemList/QuestionItemList";
import Text from "../../atoms/Text/Text";
import QuestionJoker from "../QuestionJoker/QuestionJoker";

const QuestionCard = ({ timer, question, onClick, handleJoker, usedJokers }) => {
  const styles = style();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Text text={question?.question} fontSize="3rem" color="white" />
      </div>
      <div style={styles.body}>
        <QuestionItemList options={question} onClick={(option) => onClick(option)} />
        <div style={styles.joker}>
          <QuestionJoker timer={timer} handleJoker={(joker) => handleJoker(joker)} usedJokers={usedJokers} />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
