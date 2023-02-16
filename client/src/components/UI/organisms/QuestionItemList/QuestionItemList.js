import React from "react";
import QuestionItem from "../../molecules/QuestionItem/QuestionItem";
import PropTypes from "prop-types";
import "./style.css";
import style from "./QuestionItemList.style";

const QuestionItemList = ({ options, onClick }) => {
  const styles = style();

  return (
    <div className="questionList" style={styles.questionList}>
      <QuestionItem disabled={options.a === "" && true} option={options.a} onClick={() => onClick("a")} />
      <QuestionItem disabled={options.b === "" && true} option={options.b} onClick={() => onClick("b")} />
      <QuestionItem disabled={options.c === "" && true} option={options.c} onClick={() => onClick("c")} />
      <QuestionItem disabled={options.d === "" && true} option={options.d} onClick={() => onClick("d")} />
    </div>
  );
};
// QuestionItemList.propTypes = {
//   options: PropTypes.array,
// };
// QuestionItemList.defaultProps = {
//   options: null,
// };

export default QuestionItemList;
