import React from "react";
import PropTypes from "prop-types";
import style from "./QuestionCard.style";
import QuestionItemList from "../../organisms/QuestionItemList/QuestionItemList";
import Text from "../../atoms/Text/Text";
import QuestionJoker from "../QuestionJoker/QuestionJoker";

const QuestionCard = ({ question, time }) => {
  const styles = style();
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Text text={question.inner} fontSize="2rem" color="white" />
      </div>
      <div style={styles.body}>
        <QuestionItemList options={question.options} />
        <div style={styles.joker}>
          <QuestionJoker time={time} />
        </div>
      </div>
    </div>
  );
};

QuestionCard.propTypes = {
  question: PropTypes.array,
};
QuestionCard.defaultProps = {
  question: null,
};

export default QuestionCard;
