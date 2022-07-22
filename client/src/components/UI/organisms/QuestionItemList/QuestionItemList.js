import React from "react";
import QuestionItem from "../../molecules/QuestionItem/QuestionItem";
import PropTypes from "prop-types";
import "./style.css";
import style from "./QuestionItemList.style";

const QuestionItemList = ({ options }) => {
  const styles = style();
  return (
    <div style={styles.questionList}>
      {options.map((option) => (
        <QuestionItem option={option} />
      ))}
    </div>
  );
};
QuestionItemList.propTypes = {
  options: PropTypes.array,
};
QuestionItemList.defaultProps = {
  options: null,
};

export default QuestionItemList;
