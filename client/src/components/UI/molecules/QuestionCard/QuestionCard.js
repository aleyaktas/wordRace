import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./QuestionCard.style";
import QuestionItemList from "../../organisms/QuestionItemList/QuestionItemList";
import Text from "../../atoms/Text/Text";
import QuestionJoker from "../QuestionJoker/QuestionJoker";

const QuestionCard = ({ timer, question, onClick, handleJoker, usedJokers }) => {
  const styles = style();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Text text={question.question} fontSize="3rem" color="white" />
      </div>
      <div style={styles.body}>
        <QuestionItemList options={question} onClick={(option) => onClick(option)} />
        <div style={styles.joker}>
          <QuestionJoker time={timer} handleJoker={(joker) => handleJoker(joker)} usedJokers={usedJokers} />
        </div>
      </div>
    </div>
  );
};

// QuestionCard.propTypes = {
//   question: PropTypes.arrayOf(PropTypes.object),
// };
// QuestionCard.defaultProps = {
//   question: null,
// };

export default QuestionCard;
