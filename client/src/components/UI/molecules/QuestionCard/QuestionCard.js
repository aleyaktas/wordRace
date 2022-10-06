import React from "react";
import PropTypes from "prop-types";
import style from "./QuestionCard.style";
import QuestionItemList from "../../organisms/QuestionItemList/QuestionItemList";
import Text from "../../atoms/Text/Text";
import QuestionJoker from "../QuestionJoker/QuestionJoker";

const QuestionCard = () => {
  const styles = style();
  const question = {
    inner: "What is the answer?",
    options: ["first option", "second option", "third option", "fourth option"],
  };
  const time = "20";
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

// QuestionCard.propTypes = {
//   question: PropTypes.arrayOf(PropTypes.object),
// };
// QuestionCard.defaultProps = {
//   question: null,
// };

export default QuestionCard;
